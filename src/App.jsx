  import React, { useState } from 'react';
  import Navbar from './assets/Navbar/Navbar';
  import Footer from './assets/Footer/Footer';
  import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
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
          <Route path="/Grocery/" element={<Homepage />} />
          <Route path="/Grocery/cart" element={<Cart/>} />
          <Route path="/Grocery/order" element={<Placeorder/>} />
          <Route path="/Grocery/Verify" element={<Verify/>} />
          <Route path="/Grocery/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
      </>
    );
  }
  
  export default App;

