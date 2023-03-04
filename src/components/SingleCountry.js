import React from 'react'
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom';


const SingleCountry = () => {
    const [country, setCountry] = useState([]);
    const {name} = useParams();


    useEffect (() => {
        const getSingleCountry = async () => {
            try {
                const res = await fetch (`https://restcountries.com/v3.1/name/${name}`)
                const data = await res.json()
                setCountry(data)
                
            } catch (error) {
                console.error(error)
            }
        }
        getSingleCountry()

    }, [name])
  return (
  <>
  <section className='p-8 md:py-0 max-w-7xl mx-auto'>
   {country.map((item) => (
    <div key={item.population} className="grid grid cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen">
        <article>
            <img src={item.flags.svg} alt={item.name}  />
        </article>
        <article>
            <h1 className='font-bold text-gray-900 text-4xl lg:text-6xl'>{item.name.official}</h1>
            <ul>
                <li>Capital:</li>
                <li>Population:</li>
                <li>Region:</li>
                <li>Subregion:</li>
                <li>Currency:</li>
                
            </ul>
            <h3>Borders</h3>
            <ul>
                {}
            </ul>
        </article>
    </div>
   ))}
  </section>
  
  </>
  )
}

export default SingleCountry