import React from 'react';
import { useState, useEffect } from 'react';

export default function MovieList() {

    // state to store cinema data

    const [movies, setMovies] = useState([]);

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
                // setMovies(cinemaData.cinema.movies);

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
        <div className='cinemaApp'>
            <h2>Aktuella film-titlar:</h2>
            {movies.map((movie, i) => (
                <tr key={i}>
                    <td>{movie.title}</td>
                    <td>{movie.duration}</td>
                </tr>
            ))}
        </div>
    )
}
