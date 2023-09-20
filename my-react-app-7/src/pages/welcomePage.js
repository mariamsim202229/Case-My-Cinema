
import React from 'react';
import Cinema from '../component/components/cinema';
import MovieList from '../component/components/movieList';
import Navbar from '../component/components/navBar';
import Footer from '../component/components/footer';


export default function WelcomePage() {

  //the homepage component and its components imported in the page
  return (
    <div className='cinemaApp'>
      <Navbar />
      <Cinema />
      <MovieList />
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  )
}



