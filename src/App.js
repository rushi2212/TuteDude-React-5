import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Cart from './Components/Cart';
import Payment from './Components/Payment';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cart/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
