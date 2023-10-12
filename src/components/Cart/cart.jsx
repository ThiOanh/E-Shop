import React from "react";
import { Link } from "react-router-dom";
import { LOCATIONS } from "constants/index";
import styles from "./cart.module.css";




function cart(props) {
  return (
    
    <div className="container">
      <div>Home / Cart</div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tr style={{ border: "1px solid black" }}>
            <tr>
            <img
            src={require("assets/images/cart/monitor.png")}
            className="Ltd Monitor"
            alt="..."
          />
              <td>Ltd Monitor</td>
            </tr>

            <td>650$</td>
            <td>
              <button class="decrease()">-</button>
              <input type="number" max={100} min={1} defaultValue={1} />
              <button class="increase()">+</button>
              <p id="demo"></p>
            </td>
            <td>19$</td>
            <td>
              <button class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <tr>
            <img
            src={require("assets/images/cart/gamePad.png")}
            className="h1 Gamepad"
            alt="..."
          />
              <td>H1 Gamepad</td>
            </tr>
            <td>550$</td>
            <td>
            <button class="decrease()">-</button>
              <input type="number" max={100} min={1} defaultValue={1} />
              <button class="decrease()">+</button>
            </td>
            <td>19$</td>
            <td>
            <button class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </table>
        <hr />
        <div className="d-flex justify-content-between">
          <div>Return To Shop</div>
          <div>Update Cart</div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div>
            <input type="text" placeholder="coupon Code" />
            <button>Apply Coupon</button>
          </div>
          <div>
            <h3>Cart Total</h3>
            <div className="d-flex justify-content-between">
              <p>Subtotal:</p>
              <p>1750$</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Shiping:</p>
              <p>free</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Total:</p>
              <p>1750$</p>
            </div>
            <div>
              <Link to={LOCATIONS.CHECKOUT}>
                <button className="btn btn-danger">Process Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cart;
