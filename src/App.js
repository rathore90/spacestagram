import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={ <NasaPhoto />} path="/nasaphoto" />
      </Routes>
    </BrowserRouter>
  );
}