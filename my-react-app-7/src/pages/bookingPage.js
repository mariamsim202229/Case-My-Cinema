import React from 'react';
import Shows from '../component/components/shows';
import Navbar from '../component/components/navBar';
import Footer from '../component/footer';

function BookingPage() {

    return (

        <div className='bookingApp'>
            <Navbar />
            <Shows />
            <br/>
            <Footer />
        </div>
    )
}

export default BookingPage;