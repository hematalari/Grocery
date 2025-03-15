import React from "react";
import "./Home.css";
import heroImage from "/src/assets/Images/Hero.jpeg"; // Add your hero image to the project

const Home = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="header-content">
        <h1>Fresh Groceries Delivered to Your Doorstep</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          perspiciatis dicta veniam esse repellendus 
        </p>
        <button className="shopnow">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Home;
