import React from "react";
//import react router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import componenets
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
//import pages
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
//import styles
import "./Styles/app.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
