
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import { useState, useEffect } from 'react';
import WelcomePage from './pages/welcomePage';
import BookingPage from './pages/bookingPage';
// import ErrorPage from './error-page';
import Navbar from './component/components/navBar';

function App() {

  return (

    <Router>
      <div className='cinemaApp'>
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/booking' element={<BookingPage />} />
          </Routes>
        </div>
        {/* <Route path = "*" element = {<ErrorPage/>} /> */}
      </div>
    </Router>
  );
}

export default App;
