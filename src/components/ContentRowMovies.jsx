import React from 'react';
import SmallBox from './SmallBox';


function ContentRowMovies() {

    const moviesInDB = {
        titulo : "Movies in data base", 
        colorBorde : "primary",
        cifra : 21, 
        icono :"fas fa-film fa-2x text-gray-300"
    }
    const totalAwards = {
        titulo : "Total awards", 
        colorBorde : "success",
        cifra : 79, 
        icono :"fas fa-award fa-2x text-gray-300"
    }
    const actorsQuantity = {
        titulo : "Actors quantity", 
        colorBorde : "warning",
        cifra : 49, 
        icono : "fas fa-user fa-2x text-gray-300"
    }

    const cards = [moviesInDB, totalAwards, actorsQuantity]

    return (
        <div className='row'>
        {cards.map((section, i) => {

 return <SmallBox {...section}key={section+i}/>

        })}    
        </div>
    )
}

export default ContentRowMovies
