import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TheHeader from "./assets/components/the-header/TheHeader";
import FormF from "./assets/components/form-f/FormF";
import ListF from "./assets/components/list-f/ListF";
import NavF from "./assets/components/nav-f/NavF";
import Footer from "./assets/components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavF />
        <Routes>
          <Route path="/" element={<TheHeader />} />
          <Route path="/form" element={<FormF />} />
          <Route path="/list" element={<ListF />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
