import React, { useState } from 'react';            
import DatePicker from 'react-datepicker';          
import 'react-datepicker/dist/react-datepicker.css'; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormPage from "./form";

  function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Router>
    <>
      <nav className="navbar navbar-dark fixed-top custom-navbar px-4" style={{ height: '90px', backgroundColor: '#652c22' }}>
        <div className="container-fluid position-relative">
          <div className="d-flex gap-3 align-items-center">
            <img src={`${process.env.PUBLIC_URL}/chess.png`} className="img-fluid" alt="Logo" style={{ height: '60px' }} />
            <a className="nav-link text-light" href="Game.html">Game</a>
            <a className="nav-link text-light" href="E-commerce.html">E-commerce</a>
            <a className="nav-link text-light" href="Finance.html">Finance</a>
          </div>

          <div className="center-brand" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <a className="nav-link text-light" href="index.html">Alex McIvor</a>
          </div>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '110px' }}>
        <p>Get our one on one coaching with our top grandmaster coaches.</p>
        <a><p>Apply Here</p></a>
        <Link to="/form" className="btn btn-primary">
          Apply Here
        </Link>
        <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/form" element={<FormPage />} />
        </Routes>
        <a className="enroll-button" href="https://www.bishopchess.ca/" target="_self" rel="noopener">ENROLL NOW</a>
      </div>

      <div className="container py-5">
        <h2 className="mb-4">Reserve a Spot</h2>
        <form action="https://formspree.io/f/xdkzkoen" method="POST">
          <div className="mb-3">
            <label className="form-label">Select Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd h:mm aa"
              minDate={new Date()}
              includeDates={[
                new Date('2025-06-05'),
                new Date('2025-06-10'),
                new Date('2025-06-15'),
              ]}
              showTimeSelect
              inline
              name="date"
            />
            <input
              type="hidden"
              name="date"
              value={selectedDate ? selectedDate.toISOString() : ''}
              required
            />
            <div className="mt-2 text-secondary">
              Selected: {selectedDate ? selectedDate.toLocaleString() : 'None'}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" name="name" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="_replyto" required />
          </div>

          <button type="submit" className="btn btn-primary">Reserve</button>
        </form>
      </div>

      <footer className="text-center text-lg-start bg-light text-muted mt-5">
        <div className="text-center p-4">
          © 2025 Alex McIvor
        </div>
      </footer>
    </>
    </Router>
  );
}



export default App; 