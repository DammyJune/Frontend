import carousel1 from "../assets/images/carousel1.png"
import carousel2 from "../assets/images/carousel2.png"
import carousel3 from "../assets/images/carousel3.png"
import "../styles/home.css"

function DealsSection() {

  return (

    <section className="container deals-section">

      <div className="row align-items-center">

        <div className="col-md-4">

          <h2 className="css">Deals Of The Month</h2>

          <p className="css">
            Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Scelerisque duis ultrices sollicitudin aliquam sem.<br/> Scelerisque duis ultrices sollicitudin 
          </p>

          <button className="btn btn-dark">
            Buy Now
          </button>

          <p className="text">Hurry, Before It's Too Late!</p>

          <div className="countdown d-flex gap-3 mt-4">

            <div>
              <h4 className="count">02</h4>
              <span>Days</span>
            </div>

            <div>
              <h4 className="count">06</h4>
              <span>Hr</span>
            </div>

            <div>
              <h4 className="count">05</h4>
              <span>Mins</span>
            </div>

            <div>
              <h4 className="count">30</h4>
              <span>Sec</span>
            </div>

          </div>

        </div>

        <div className="col-md-8">

          <div className="row">

            <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carousel1} className="d-block w-100" alt="carousel1" className="car1"/>
    </div>
    <div className="carousel-item">
      <img src={carousel2} className="d-block w-100" alt="carousel2" className="car2"/> 
    </div>
    <div className="carousel-item">
      <img src={carousel3} className="d-block w-100" alt="carousel3" className="car3"/>
    </div>
  </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>    
        </div>

      </div>

    </section>

  )
}

export default DealsSection