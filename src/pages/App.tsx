import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Home from "./home";
import Providers from "../components/providers";
import Profile from "./profile";
import Test from "./test";
import Courses from "./courses";
function App() {
  return (
    <Providers>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path='/test' element={<Test/>}/>
          <Route path='/theme/:id' element={<Courses/>}/>
      </Routes>
    </Providers>
  );
}

export default App;
