import React from 'react'
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom';


const SingleCountry = () => {
    const [country, setCountry] = useState([]);
    const {name} = useParams();


    useEffect (() => {

    }, [name])
  return (
    <div>{name}</div>
  )
}

export default SingleCountry