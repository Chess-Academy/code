// src/form.js
import React from "react";
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className="container" style ={{paddingTop:50}}>
    <h1 className="custom-title">Contact Us</h1>
    <p className="custom-text">Contact our team with any question or concerns about any of the services we offer with the details below.</p>
    <h2 className="custom-title" style ={{paddingTop:50}}>Email</h2>
    <p className="custom-text">6lmg2flg0@mozmail.com</p>
    <h2 className="custom-title">Phone</h2>
    <p className="custom-text">1 888-888-8888</p>
    <h2 className="custom-title">location</h2>
    <p className="custom-text">75 Laurier Ave E, Ottawa, ON K1N 6N5</p>
      {/* Any other home page content here */}
    </div>
  );
}
export default HomePage;
