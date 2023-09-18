import React from 'react';
import { useState, useEffect } from 'react';


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
        const allShows = data.cinema.movies.reduce((acc, movie) => acc.concat(movie.shows), []);
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
    <div className='bookingShow' >
      <h1>BOKA DIN FILM HÄR</h1>
      <br />
      <div className="movieDiv">

        {movies.map((movie, i) => (
          <div key={i}>
            {movie.title}
            <br />
            {movie.duration}
            <br />
            {movie.shows.map((show, j) => (
              <div key={`${i}-${j}`} className="showDiv">
                {show.date}
                <br />
                {show.time}
                <br />
                {show.room}
                <br />
                Antal lediga sittplatser: {show.seats.filter(seat => !seat.booked).length}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

  )
}
