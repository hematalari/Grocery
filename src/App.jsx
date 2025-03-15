  import React, { useState } from 'react';
  import Navbar from './assets/Navbar/Navbar';
  import Footer from './assets/Footer/Footer';
  import './App.css';
import { Route, Routes } from 'react-router-dom';
import Placeorder from './assets/Placeorder/Placeorder';
import Cart from './assets/Cart/Cart';
import Loginpopup from './assets/Loginpopup/Loginpopup';
import Homepage from './assets/HomePage/Homepage';
import Verify from './assets/Verify/Verify';
import MyOrders from './assets/MyOrders/MyOrders';
  
  function App() {
    const [showlogin, setShowlogin] = useState(false)
    return (
      <>
      {showlogin?<Loginpopup setShowlogin={setShowlogin} />:<></>}
      <div className="App">
        <Navbar setShowlogin={setShowlogin}/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<Placeorder/>} />
          <Route path="/Verify" element={<Verify/>} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
      </>
    );
  }
  
  export default App;

