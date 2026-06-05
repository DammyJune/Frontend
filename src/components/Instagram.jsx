import React from "react";
import "../styles/home.css"
import insta1 from "../assets/images/insta1.png"
import insta2 from "../assets/images/insta2.png"
import insta3 from "../assets/images/insta3.png"
import insta4 from "../assets/images/insta4.png"
import insta5 from "../assets/images/insta5.png"
import insta6 from "../assets/images/insta6.png"
import insta7 from "../assets/images/insta7.png"
import profile1 from "../assets/images/profile1.png"
import profile2 from "../assets/images/profile2.png"

const instagramImages = [
  insta1,
  insta2,
  insta3,
  insta4,
  insta5,
  insta6,
  insta7
];

const testimonials = [
  {
    image:
      profile1,
    name: "James K.",
    role: "Traveler",
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
  },

  {
    image:
      profile2,
    name: "Jane W.",
    role: "Designer",
    text: "I was looking for this. Nice to solve a wonderful problem. I love the feel. It's great!",
  },
];

const Instagram = () => {
  return (
    <div className="instagram-section">

      {/* Instagram Part */}
      <div className="top-section">
        <h1>Follow Us On Instagram</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Scelerisque duis ultrices sollicitudin aliquam sem.
        </p>

        <div className="image-gallery">
          {instagramImages.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt="fashion" />
            </div>
          ))}

          
        </div>
      </div>
      {/* Testimonials */}
      <div className="testimonial-section">
        <h1>This Is What Our Customers Say</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Scelerisque duis.
        </p>

        <div className="testimonial-container">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <img src={item.image} alt={item.name} />

              <div className="testimonial-content">
                <div className="stars">★★★★★</div>

                <p>{item.text}</p>

                <h3>{item.name}</h3>

                <span>{item.role}</span>
              </div>
            </div>
           
          ))}
        </div>
        </div>
      </div>
  );
};

export default Instagram;