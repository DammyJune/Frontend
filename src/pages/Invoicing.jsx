import React from "react";
import "../styles/home.css"
import FASCO from "../assets/images/FASCO.png"
import { NavLink } from "react-router";

function Invoicing() {
  return (
    <div className="invoice-page container py-5">
      <div className="invoice-card">

        <NavLink className="navbar-brand fw-bold fs-3" to="/">
          <img
                src={FASCO}
                alt="FASCO"
                className="logo"
              />
        </NavLink>


        <div className="invoice-header">
          <h1>Invoice</h1>
          <p>#INV-2026-001</p>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <h5>From</h5>
            <p>
              Your Store Name <br />
              Lagos, Nigeria <br />
              support@yourstore.com
            </p>
          </div>

          <div className="col-md-6 text-md-end">
            <h5>To</h5>
            <p>
              Customer Name <br />
              customer@email.com <br />
              Lagos, Nigeria
            </p>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>T-Shirt</td>
                <td>2</td>
                <td>₦10,000</td>
                <td>₦20,000</td>
              </tr>

              <tr>
                <td>Sneakers</td>
                <td>1</td>
                <td>₦25,000</td>
                <td>₦25,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="invoice-summary">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₦45,000</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>₦2,000</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>₦47,000</span>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-dark me-2">
            Download PDF
          </button>

          <button className="btn btn-primary">
            Print Invoice
          </button>
        </div>

      </div>
    </div>
  );
}

export default Invoicing;