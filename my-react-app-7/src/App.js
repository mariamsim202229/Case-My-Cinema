
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import WelcomePage from './pages/welcomePage';
import BookingPage from './pages/bookingPage';
// import ErrorPage from './error-page';



function App() {
  return (

    <Router>
     
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/booking' element={<BookingPage />} />
          <Route path="*" element={<ErrorBoundary />} />
        </Routes>
   
    </Router>
  );
}


export default App;

