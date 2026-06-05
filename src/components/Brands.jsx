import chanel from "../assets/images/chanel.png"
import louis from "../assets/images/louis.png"
import prada from "../assets/images/prada.png"
import calvin from "../assets/images/calvin.png"
import denim from "../assets/images/denim.png"

function Brands() {

  const brands = [
    chanel,
    louis,
    prada,
    calvin,
    denim
  ]

  return (

    <section className="container brands-section">

      <div className="row align-items-center text-center">

        {
          brands.map((brand, index) => (

            <div className="col" key={index}>

              <img
                src={brand}
                alt="brand"
                className="brand-logo img-fluid"
              />

            </div>

          ))
        }

      </div>

    </section>

  )
}

export default Brands