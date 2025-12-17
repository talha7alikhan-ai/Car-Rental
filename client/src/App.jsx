import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { Route,Routes,useLocation } from 'react-router-dom'
import CarDetails from './pages/CarDetails.jsx';
import Home from './pages/Home.jsx';
import Cars from './pages/Cars.jsx';
import MyBookings from './pages/MyBookings.jsx';
import Footer from './components/Footer.jsx';
const App = () => {

    const [ShowLogin, setShowLogin] = useState(false);
     const isOwnerPath = useLocation().pathname.startsWith('/owner'); 
   

  return (
      <>
      {! isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

        <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/car-details/:id' element={<CarDetails/>} />
             <Route path='/cars' element={<Cars/>} />
             <Route path='/my-bookings' element={<MyBookings/>}/>
        </Routes>
             
           {!isOwnerPath && <Footer /> }
             
     </>

  )
}

export default App
