import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import WhatsappFloat from "./components/WhatsappFloat";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      <WhatsappFloat />
    </>
  );
}

export default App;
