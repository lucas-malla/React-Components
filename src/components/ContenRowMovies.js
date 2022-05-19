
import React from "react";
import Card from './Card';

let moviesInDB = {
    title: 'Movies in Data Base',
    color: 'primary',
    cuantity: 21,
    icon:'fa-film'
}
let totalAwards = {
    title: 'Total awards',
    color: 'success',
    cuantity: 79,
    icon:' fa-award '
}
let actorsQuantity  = {
    title: 'Actors quantity',
    color: 'warning',
    cuantity: 49,
    icon:'fa-user'
}

let cardProps =[moviesInDB, totalAwards, actorsQuantity]; 

function ContenRowMovies() {
    return (
        <div className="row">
          {
            cardProps.map((element, index) => {
          return <Card {...element} key ={index} />})
          }
        </div>
    )
}

export default ContenRowMovies;