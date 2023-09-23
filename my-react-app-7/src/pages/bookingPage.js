import React from 'react';
import Shows from '../component/components/movieShows';
import Navbar from '../component/components/navBar';
import Footer from '../component/components/footer';
import { useCinemaData } from '../component/components/useCinemaData';


function BookingPage() {

    const { loading, error } = useCinemaData();

    // check if loading, if true then we should display a loading message
    if (loading) {
        return <div>Loading...</div>;
    }

    // check if there is an error, if true then we should display it
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (

        // a page/route for booking the shows, includes all the components 
        <div className='bookingApp'>
            <Navbar />
            <Shows />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default BookingPage;