import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Home from "./home";
import Providers from "../components/providers";
import Profile from "./profile";
import Test from "./test";
import Courses from "./courses";
import Lectures from "./lectures";
import LectureDetails from "./lectures/LectureDetails";
function App() {
  return (
    <Providers>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
        <Route path="/theme/:id" element={<Courses />} />
        <Route path="/lectures/:id" element={<Lectures />} />
        <Route path="/lecture/:id" element={<LectureDetails />} />
      </Routes>
    </Providers>
  );
}

export default App;
