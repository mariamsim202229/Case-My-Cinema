import React from 'react';
import { useState, useEffect } from 'react';

export default function WelcomePage() {

  const [movies, setMovies] = useState([]);

  const cinemaData = {
    cinema: {
      description: 'Description of the cinema', // Replace with your cinema description
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/cinema.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCinemaData(data);
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

  setMovies(cinema.cinemaData)

  return (
    <div className='cinemaApp'>
      <header className="MyHeader">
        <h1>Välkommen till {cinemaData.cinema.name}</h1>
        <p>
          {cinemaData.cinema.description}
        </p>
        <h2>Aktuella film-titlar:</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie.title}</li>
          ))}
        </ul>

      </header>
    </div>
  )

}



