// src/App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/layout/Footer";
import { NavBar } from "./components/layout/NavBar";
import { MainRoutes } from "./components/routes/MainRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
