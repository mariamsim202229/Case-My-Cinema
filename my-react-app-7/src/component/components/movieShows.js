import React from 'react';
import { useState, useEffect } from 'react';
import BookingForm from './bookingShow';


export default function Shows() {

  // state to store cinema data
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  // state to track if application is loading
  const [loading, setLoading] = useState(true);

  // state to track any error message
  const [error, setError] = useState(null);

  // trigger the arrow function inside useEffect ONE time before loading
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/cinema.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMovies(data.cinema.movies);
        const allShows = data.cinema.movies.flatMap(movie => movie.shows);
        setShows(allShows);

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // check if loading, if true then we should display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // check if there is an error, if true then we should display it
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>BOKA DIN FILM HÄR</h1>
      <p className='paragraph'>Välj mellan 5 filmer och mellan 4 olika föreställningar för varje film</p>
      <div className='bookingShow' >
        {movies.map((movie, i) => (
          <div key={i}>
            <h2 className='titleStyle'>{movie.title}  <br/> {movie.duration}</h2>
          
            {movie.shows.map((show, j) => (
              <div key={j} className="showDiv">
                <p>{show.date}</p>
                <p>Tid: {show.time}</p>
                <p> {show.room}</p>
                <p>Antal lediga sittplatser: {show.seats.filter(seat => !seat.booked).length}</p>
               <BookingForm/>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
