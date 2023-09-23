import React from 'react';


export default function Cinema({cinemaData}) {// state to store cinema data
   
  if (!cinemaData) {
    return null;
  }
   
    return (
        // fetching data from json file about the name and description about the cinema
        <div>
            <h1> {cinemaData.cinema.name} </h1>
            <p className='text'> {cinemaData.cinema.description} </p>
        </div>
    )
}







