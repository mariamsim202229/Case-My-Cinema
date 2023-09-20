
import './App.css';
//import router 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import WelcomePage from './pages/welcomePage';
import BookingPage from './pages/bookingPage';

function App() {
  return (

// create a router for three routes, welcomepage, bookingpage and error page
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

