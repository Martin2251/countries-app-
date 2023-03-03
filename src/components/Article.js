import React from 'react'

const Article = ({flags,name,population,region,subregion}) => {
  return (
   <>
   <article>
    <img src={flags.svg} alt=""  />
    <h2 className='font-bold text-lg text-gray-900 mb-2'>{name.common}</h2>
    <ul>
        <li>Population: {population.toLocaleString()}</li>
        <li>Region : {region}</li>
        <li>Subregion: {subregion}</li>
    </ul>
   </article>
   
   </>
  )
}

export default Article