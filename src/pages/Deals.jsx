import React from "react";
import "../styles/home.css"
import FASCO from "../assets/images/FASCO.png"
import arrival1 from "../assets/images/arrival1.png"
import arrival2 from "../assets/images/arrival2.png"
import arrival3 from "../assets/images/arrival3.png"

function Deals() {
  const deals = [
    {
      id: 1,
      title: "Summer Sale",
      discount: "50% OFF",
      image: arrival1,
    },
    {
      id: 2,
      title: "New Arrivals",
      discount: "30% OFF",
      image: arrival2,
    },
    {
      id: 3,
      title: "Limited Offer",
      discount: "70% OFF",
      image: arrival3,
    },
  ];

  return (
            

    <div className="deals-page">
      <div className="deals-hero">
        <h1>Special Deals</h1>
        <p>Grab amazing discounts before they're gone!</p>
      </div>
            

      <div className="container py-5">
        <div className="row g-4">
          {deals.map((deal) => (
            <div className="col-md-4" key={deal.id}>
              <div className="deal-card">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="img-fluid"
                />

                <div className="deal-content">
                  <span className="deal-badge">
                    {deal.discount}
                  </span>

                  <h4>{deal.title}</h4>

                  <button className="btn btn-dark">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="countdown-section mt-5">
          <h2>Flash Sale Ends Soon!</h2>
          <p>Don't miss out on these limited-time offers.</p>

          <button className="btn btn-danger">
            View All Deals
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deals;