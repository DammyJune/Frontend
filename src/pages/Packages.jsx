import React from "react";
import "../styles/home.css"

function Packages() {
  const packages = [
    {
      id: 1,
      name: "Basic",
      price: "$9/month",
      features: [
        "5 Products",
        "Basic Support",
        "1 User Account",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: "$19/month",
      features: [
        "20 Products",
        "Priority Support",
        "5 User Accounts",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: "$39/month",
      features: [
        "Unlimited Products",
        "24/7 Support",
        "Unlimited Users",
      ],
    },
  ];

  return (
    <div className="packages-page">
      <div className="packages-hero">
        <h1>Our Packages</h1>
        <p>Choose the package that suits your needs.</p>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {packages.map((pkg) => (
            <div className="col-md-4" key={pkg.id}>
              <div className="package-card">
                <h2>{pkg.name}</h2>
                <h3>{pkg.price}</h3>

                <ul>
                  {pkg.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>

                <button className="btn btn-dark w-100">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="custom-package text-center mt-5">
          <h2>Need a Custom Package?</h2>
          <p>
            Contact us and we'll create a package tailored
            specifically for your business.
          </p>

          <button className="btn btn-primary">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Packages;