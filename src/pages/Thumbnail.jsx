import React from "react";
import "../styles/home.css"
import Homepage from "../assets/images/Homepage.png"

import Productpage from "../assets/images/Productpage.png"


function Thumbnail () {
    return (
    <div className="gallery-section">
  <div className="thumbnail-column">
    {images.map((img, index) => (
      <img
        key={index}
        src={Homepage}
        alt={`Thumbnail ${index + 1}`}
        className={`thumb ${
          selectedImage === img ? "active-thumb" : ""
        }`}
        onClick={() => setSelectedImage(img)}
      />
    ))}
  </div>

  <div className="main-image">
    <img src={Productpage} alt="Product" />
  </div>
</div>
)};

export default Thumbnail