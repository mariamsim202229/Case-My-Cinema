
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import { useState, useEffect } from 'react';
import WelcomePage from './pages/welcomePage';
import BookingPage from './pages/bookingPage';
import ErrorPage from './error-page';

function App() {
  return (

    <Router>
      <div className='content'>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/booking' element={<BookingPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

