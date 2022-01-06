import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NasaPhoto />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}