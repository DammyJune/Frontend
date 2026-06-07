import React from "react";
import {
  BsShieldCheck,
  BsBoxSeam,
  BsHeadset,
  BsStar,
} from "react-icons/bs";

const Services = () => {
  return (
    <section className="services-section container py-5">
      <div className="row text-center gy-4">

        {/* Service 1 */}
        <div className="col-lg-3 col-6">
          <div className="service-box">
            <BsStar className="service-icon" />

            <div>
              <h5>High Quality</h5>
              <p>crafted from top materials</p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-lg-3 col-6">
          <div className="service-box">
            <BsShieldCheck className="service-icon" />

            <div>
              <h5>Warranty Protection</h5>
              <p>Over 2 years</p>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-lg-3 col-6">
          <div className="service-box">
            <BsBoxSeam className="service-icon" />

            <div>
              <h5>Free Shipping</h5>
              <p>Order over 150 $</p>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="col-lg-3 col-6">
          <div className="service-box">
            <BsHeadset className="service-icon" />

            <div>
              <h5>24 / 7 Support</h5>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;