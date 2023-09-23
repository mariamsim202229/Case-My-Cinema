import { useState, useEffect } from "react";

export function useCinemaData() {

    // state to store cinema data, movies, shows in a single function which is imported to their respective components
    const [cinemaData, setCinemaData] = useState(null);
    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);
    // state to track if application is loading
    const [loading, setLoading] = useState(true);
    // state to track any error message
    const [error, setError] = useState(null);

    // trigger the arrow function inside useEffect ONE time before loading
    //useEffect is used now only once in the useCinemaData function and imported to other components of the webpage
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/cinema.json');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCinemaData(data);
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



    return { cinemaData, movies, shows, loading, error };
}


