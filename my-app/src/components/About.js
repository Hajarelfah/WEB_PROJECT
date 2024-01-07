import React from "react";
import MultiplePizzas from "../img/ros.jpg";
import "../style/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to FLOWERA, where we believe in the language of petals and the timeless beauty that blooms bring to our lives. At the heart of our floral haven is a passion for capturing nature's artistry and sharing it with you. Our journey begins with a deep appreciation for the elegance and enchantment that flowers bestow upon every moment. [Your Flower Shop's Name] is not just a marketplace for blooms; it's a celebration of the vibrant colors, delicate fragrances, and emotive symbolism found in every petal. Join us on this floral adventure as we curate breathtaking arrangements, each designed to evoke emotion, enhance spaces, and bring the joy of nature into your world.
          
        </p>
      </div>
    </div>
  );
}

export default About;