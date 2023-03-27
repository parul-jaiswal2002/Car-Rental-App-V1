
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CarBooking from './pages/CarBooking';
import BookingDetails from './pages/BookingDetails';
import Quote from './pages/Quote';
import Admin from './pages/Admin';
import AddCars from './pages/AddCar';
import MyBooking from './pages/MyBooking';
import EditBooking from './pages/EditBooking';
import Navbar from './components/Navbar';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { AdminLogin } from './pages/AdminLogin';



function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/adminLogin' element={<AdminLogin />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/addcar" element={<AddCars />} />
            <Route path='/carbooking' element={<CarBooking />} />
            <Route path='/quote' element={<Quote />} />
            <Route path="/BookingDetails" element={<BookingDetails />} />
            <Route path='/editbooking' element={<EditBooking />}></Route>
            <Route path='/mybooking' element={<MyBooking />}></Route>

          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
