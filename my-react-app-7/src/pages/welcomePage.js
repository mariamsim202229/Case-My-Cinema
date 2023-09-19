
import React from 'react';
import Cinema from '../component/components/cinema';
import MovieList from '../component/components/movieList';
import Navbar from '../component/components/navBar';
import Footer from '../component/components/footer';


export default function WelcomePage() {

  return (
    <div className='cinemaApp'>
      <Navbar />
      <Cinema />
      <MovieList />
      <Footer />
    </div>
  )
}



