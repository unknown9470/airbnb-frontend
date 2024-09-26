// src/components/routes/MainRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../components/layout/Home";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
