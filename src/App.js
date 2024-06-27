
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Footer from './components/layout/Footer';
import { MainRoutes } from './components/routes/MainRoutes';
import { NavBar } from './components/layout/NavBar';

function App() {
  return(
    <>
      <BrowserRouter>
          <NavBar />
          <MainRoutes />
          <Footer />
        </BrowserRouter>
    </>
  )
    
}

export default App;
