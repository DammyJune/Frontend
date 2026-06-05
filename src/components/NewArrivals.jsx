import {useState} from "react"
import "../styles/home.css"
import arrival1 from "../assets/images/arrival1.png"
import arrival2 from "../assets/images/arrival2.png"
import arrival3 from "../assets/images/arrival3.png"
import arrival4 from "../assets/images/arrival4.png"
import arrival5 from "../assets/images/arrival5.png"
import arrival6 from "../assets/images/arrival6.png"


function NewArrivals() {

    const [activeButton, setActiveButton] =useState(0)

    const buttons = [
        "Men's Fashion",
        "Women's Fashion",
        "Women Accessories",
        "Men Accessories",
        "Discount Deals"
    ]

  const products = [1,2,3,4,5,6]

  return (

    <section className="container new-arrivals">

      <div className="text-center mb-5">

        <h2>New Arrivals</h2>

        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis<br/> ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin      
                    </p>

      </div>

      {/*BUTTONS*/}

      <div className="button-container mb-5">

        {
          buttons.map((button, index) => (

            <button
              key={index}

              className={
                activeButton === index
                ? "category-btn active"
                : "category-btn"
              }

              onClick={() => setActiveButton(index)}
            >

              {button}

            </button>

          ))
        }

<div className="container py-5">
      <div className="row g-4">

        <div className="col-md-4">
          <img src={arrival1} alt="" className="img-fluid rounded" />
          <div className="card-body px-0">
          <div className="d-flex justify-content-between">
            <h4 className="product-title">White Dress</h4>
            <div className="text-warning ratings">★★★★★</div>
          </div>

          <p className="text-muted">Al Karam</p>

          <p className="review-text">(4.1k) Customer Reviews</p>

          <div className="d-flex justify-content-between align-items-center">
            <h3>$95.50</h3>
            <span className="text-danger small soldout">
              Almost Sold Out
            </span>
          </div>
        </div>
        </div>

        <div className="col-md-4">
          <img src={arrival2} alt="" className="img-fluid rounded" />
          <div className="card-body px-0">
          <div className="d-flex justify-content-between">
            <h4 className="product-title">White Dress</h4>
            <div className="text-warning ratings">★★★★★</div>
          </div>

          <p className="text-muted">Al Karam</p>

          <p className="review-text">(4.1k) Customer Reviews</p>

          <div className="d-flex justify-content-between align-items-center">
            <h3>$95.50</h3>
            <span className="text-danger small soldout">
              Almost Sold Out
            </span>
        </div>
      </div>
        </div>

        <div className="col-md-4">
          <img src={arrival3} alt="" className="img-fluid rounded" />
          <div className="card-body px-0">
          <div className="d-flex justify-content-between">
            <h4 className="product-title">White Dress</h4>
            <div className="text-warning ratings">★★★★★</div>
          </div>

          <p className="text-muted">Al Karam</p>

          <p className="review-text">(4.1k) Customer Reviews</p>

          <div className="d-flex justify-content-between align-items-center">
            <h3>$95.50</h3>
            <span className="text-danger small soldout">
              Almost Sold Out
            </span>
        </div>
      </div>
        </div>

        <div className="col-md-4">
          <img src={arrival4} alt="" className="img-fluid rounded" />
          <div className="card-body px-0">
          <div className="d-flex justify-content-between">
            <h4 className="product-title">White Dress</h4>
            <div className="text-warning ratings">★★★★★</div>
          </div>

          <p className="text-muted">Al Karam</p>

          <p className="review-text">(4.1k) Customer Reviews</p>

          <div className="d-flex justify-content-between align-items-center">
            <h3>$95.50</h3>
            <span className="text-danger small soldout">
              Almost Sold Out
            </span>
        </div>
      </div>
        </div>

        <div className="col-md-4">
          <img src={arrival5} alt="" className="img-fluid rounded" />
          <div className="card-body px-0">
          <div className="d-flex justify-content-between">
            <h4 className="product-title">White Dress</h4>
            <div className="text-warning ratings">★★★★★</div>
          </div>

          <p className="text-muted">Al Karam</p>

          <p className="review-text">(4.1k) Customer Reviews</p>

          <div className="d-flex justify-content-between align-items-center">
            <h3>$95.50</h3>
            <span className="text-danger small soldout">
              Almost Sold Out
            </span>
        </div>
      </div>
        </div>

        <div className="col-md-4">
          <img src={arrival6} alt="" className="img-fluid rounded" />
          <div className="card-body px-0">
          <div className="d-flex justify-content-between">
            <h4 className="product-title">White Dress</h4>
            <div className="text-warning ratings">★★★★★</div>
          </div>

          <p className="text-muted">Al Karam</p>

          <p className="review-text">(4.1k) Customer Reviews</p>

          <div className="d-flex justify-content-between align-items-center">
            <h3>$95.50</h3>
            <span className="text-danger small soldout">
              Almost Sold Out
            </span>
        </div>
      </div>
        </div>

      </div>
    </div>
</div>

    </section>



  )
}

export default NewArrivals