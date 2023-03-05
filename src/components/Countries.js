import React from "react";
import { useState, useEffect } from "react";
import Article from "./Article";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const regions = [
    {
        name:"Europe"
    },
    {
        name:"Asia"
    },
    {
        name:"Africa"
    },
    {
        name:"Oceania"
    },
    {
        name:"Americas"
    },
    {
        name:"Antartica"
    },
  ]

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data.slice(0,10));
      } catch (error) {
        console.error(error);
      }
    };
    getCountries();
  }, []);
  return (
    <>
      {!countries ? (
        <h1 className="text-gray-900 font-bold uppercase tracking-wide flex-center justify-center text-center h-screen text-4xl dark:text-white">
          {" "}
          Loading....
        </h1>
      ) : (
        <section className="container mx-auto p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
                <form autoComplete="off" className="max-w-4xl md:flex-1">
                    <input type="text" name="search" id="search" placeholder="Search for a country" required className="py-3 px-4 text-gray-600 placeholder-gray-600 w-full shadow outline-none"/>
                </form>
                <form >
                    <select name="filter-by-region" id="filter-by-region" className="w-52 py-3 px-4 outline-none shadow rounded">
                        {regions.map((region,index) =>(
                            <option key={index} value={region.name}>{region.name}</option>
                        ))}
                    </select>
                </form>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {countries.map((country) => (
            <Article key={countries.name} {...country}></Article>
          ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Countries;
