import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Appbar from "./Components/Appbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Movie from "./Components/Movie";
import WatchList from "./Components/Watchlist";

function App() {
  return (
    <>
      <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movies/:Id" element={<Movie />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
