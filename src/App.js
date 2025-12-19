import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Styles from "./styles/theme.css";


// later: import Skills from "./pages/Skills"; import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar appears on all pages */}
        <Navbar />

        {/* Main page content */}
        <main style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            {/* Future pages */}
            {/* <Route path="/skills" element={<Skills />} /> */}
            {/* <Route path="/projects" element={<Projects />} /> */}
          </Routes>
        </main>

        {/* Footer appears on all pages */}
        <Footer />

        {/* Vercel Web Analytics */}
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
