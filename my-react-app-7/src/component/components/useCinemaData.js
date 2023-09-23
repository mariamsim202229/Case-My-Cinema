import { useState, useEffect } from "react";

export function useCinemaData() {

    const [cinemaData, setCinemaData] = useState(null);
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
                setCinemaData(data);
                setMovies(data.cinema.movies);
            

            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return { cinemaData, movies, loading, error };
}


