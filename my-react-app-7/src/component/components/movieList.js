import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function MovieList() {

    // state to store cinema data
    const [movies, setMovies] = useState([]);
    // state to track if application is loading
    const [loading, setLoading] = useState(true);
    const [searchString, setSearchString] = useState('');

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

    const filteredMovies = movies.filter(movie => movie.title.toLocaleLowerCase().includes(searchString));

    return (

        //input type text for finding and filtering the movies that the user searches for
        // a div for displaying all the movies and their detailed information by mapping the array of movies from the cinema.json file
        <div>
            <div>
                <input id='inputSearch'
                    placeholder="Sök"
                    type="text"
                    name="search"
                    onInput={e => setSearchString(e.target.value)}
                    value={searchString} />
            </div>
            <br />
            <h1>Veckans top 5 filmer</h1>
            
            <div className='flexMovie'>
                {filteredMovies.map(movie => (
                    <div className='movieCard'
                        key={movie.id} >
                        <Link to='/booking'>
                            {movie.title}
                        </Link>
                        <br />
                        <small>{movie.duration}</small>
                        <br />
                        <b><img src={movie.image} alt="Movie Image" /></b>
                        <br />
                        <i>{movie.description}</i></div>))}
            </div>
        </div>
    )
}
