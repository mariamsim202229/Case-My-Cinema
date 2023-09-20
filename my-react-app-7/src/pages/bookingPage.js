import React from 'react';
import Shows from '../component/components/movieShows';
import Navbar from '../component/components/navBar';
import Footer from '../component/components/footer';

function BookingPage() {

    return (

        // a page/route for booking the shows, includes all the components 

        <div className='bookingApp'>
            <Navbar />
            <Shows />
            <br/>
            <br/>
            <br/>
            <Footer />
        </div>
    )
}

export default BookingPage;