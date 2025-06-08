// src/form.js
import React from "react";
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className="container py-5">
    <div>
        <h1 className="mb-4 custom-title">Welcome to Chess Academy</h1>
        <p className="custom-text">Welcome to Chess Academy! Whether you're just starting out or aiming to sharpen your
             skills, we provide expert coaching both online and in-person. Join our vibrant community in the Ottawa 
             region, participate in exciting tournaments, and unlock your full chess potential with us.  </p>
        
    </div>

    <div className="container my-5" style={{padding:30}}>
  <div className="row align-items-center">
    
    <div className="col-md-6">
      <h1 className="custom-title mb-5">Coaching</h1>
      <p className="mb-5">
        Ready to take your game to the next level? Whether you're a beginner or an experienced player, 
        our personalized chess coaching will help you sharpen your skills, 
        build strategy, and boost confidence. Join our program and start improving today!
      </p>
      <Link to="/form" className="btn btn-primary mt-3">Apply Here</Link>
    </div>

    <div className="col-md-6 text-center">
      <img 
        src={`${process.env.PUBLIC_URL}/chess_board_zoom.PNG`} 
        alt="Chess coaching" 
        className="img-fluid" 
        style={{ maxHeight: '600px' }}
      />
    </div>
    
  </div>
</div>


<div className="container my-5 reviews-section">
  <h2 className="custom-title mb-4">What Our Students Say</h2>
  <div className="reviews-grid">
    <div className="review-card">
      <p>"The coaching really helped me improve my opening game. Patient and insightful!"</p>
      <h5>- Alex P.</h5>
    </div>
    <div className="review-card">
      <p>"Friendly environment and tailored lessons. Highly recommend for beginners and intermediate players."</p>
      <h5>- Sarah L.</h5>
    </div>
    <div className="review-card">
      <p>"Thanks to the coaching, I finally won my first local tournament!"</p>
      <h5>- Jamal K.</h5>
    </div>
  </div>
</div>



    <div className="container custom-text">
        <h1 className="custom-title"> Tournaments</h1>
        
        
        <p className="">Join us for our weekly in-person chess tournaments, open to players of all experience levels.
             Whether you're a seasoned competitor or just starting out, you'll find a welcoming environment with 
             skill-based sections including Open, Intermediate, and Amateur categories. Come challenge yourself, 
             meet fellow chess enthusiasts, and enjoy the game!</p>
    <div style={{padding:30}}>
    <Link to="/form2" className="btn btn-primary">Apply Here</Link>
    </div>

    </div>
    <div className="d-flex justify-content-center">
            <img src={`${process.env.PUBLIC_URL}/chess_tournament.jpeg`} className="img-fluid" alt="Chess Logo" style={{ height: '550px' }} />
    </div>
    </div>
  );
}
export default HomePage;
