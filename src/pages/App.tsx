import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Home from "./home";
import Providers from "../components/providers";
function App() {
  return (
    <Providers>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Providers>
  );
}

export default App;
