import React, { useEffect, useState } from 'react'
import './App.css';
import Clothing from './Component/Clothing/Clothing';
import Collaboration from './Component/Collaboration/Collaboration';
import Crosssection from './Component/Crosssection/Crosssection';
import Crossstore from './Component/Crossstore/Crossstore';
import Enhance from './Component/Enhance/Enhance';
import Everythingsection from './Component/Everythingsection/Everythingsection';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Howuseful from './Component/Howuseful/Howuseful';
import Navbar from './Component/Navbar/Navbar';
import Socialimg from './Component/Socialimg/Socialimg';
import Standard from './Component/Standard/Standard';
import Usingnvidia from './Component/Usingnvidia/Usingnvidia';
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {

  useEffect(() => {
    AOS.init()
  })
  return (
    <div className="abc">
      <Navbar/>
      <Home/>
      <Socialimg/>
      <Everythingsection/>
      <Enhance/>
      <Howuseful/>
      <Clothing/>
      <Standard/>
      <Crossstore/>
      <Crosssection/>
      <Usingnvidia/>
      <Collaboration/>
      <Footer/>
    </div>
  )
}

export default App