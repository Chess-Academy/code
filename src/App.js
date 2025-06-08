import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormPage from "./form";
import FormPage2 from "./form2";
import HomePage from "./HomePage";
import ContactUs from "./contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <Router>
      <div className = "app-container">
        <nav className="navbar navbar-dark custom-navbar px-4" style={{ height: '110px', backgroundColor: '#652c22' }}>
          <div className="container-fluid position-relative">
            <div className="d-flex gap-3 align-items-center">
              <img src={`${process.env.PUBLIC_URL}/King_black.png`} className="img-fluid" alt="Logo" style={{ height: '60px', marginLeft: '75px' }} />
              
            </div>
            <div className="center-brand" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
              
              <p className="custom-font"><b>Chess Academy</b></p>
              
            </div>

            <div className="d-flex align-items-center ms-auto">
              <Link to="/contact" className='custom-font'>Contact Us</Link>
      </div>
          </div>
        </nav>

        <div className = "content-wrap">
          <Routes>
            <Route path="/" element={<HomePage  />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/form2" element={<FormPage2 />} />
            <Route path="/contact" element={<ContactUs />} />

          </Routes>
        </div>

  <footer className="bg-light text-muted py-5">
  <div className="container-fluid">
    <div className="row text-center align-items-center">
      {/* Left: Copyright */}
      <div className="col-4 text-start" style={{ marginLeft: '75px' }}>
        © 2025 Chess Academy. All rights reserved.
      </div>

      {/* Center: Link */}
      <div className="col-4 d-flex gap-5" >
        <Link to="/" style={{ marginLeft: '100px' }}>Home</Link>
        <Link to="/form" >Coaching</Link>
        <Link to="/form2">Tournaments</Link>
      </div>

        {/* Right: empty or future content */}
        <div className="col-4"></div>
        </div>
      </div>
    </footer>
    </div>
    </Router>
  );
}

export default App;
