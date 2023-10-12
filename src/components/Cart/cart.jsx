import React from "react";
import { Link } from "react-router-dom";
import { LOCATIONS } from "constants/index";


function cart(props) {
  return (
    
    <div className="container">
      <h2>Home / Cart</h2>
      <p></p>

      <table class="table table-striped">
          <thead>
            <tr>
              <th> Product</th>
              <th> Price</th>
              <th> Quantity</th>
              <th> Subtotal</th>
              <th> Remove</th>
            </tr>
          </thead>
          <tbody>         
          <tr>
            <td>
            <img
            src={require("assets/images/cart/monitor.png")}
            className="Ltd Monitor"
            alt="..."
          />
          
              <td>Ltd Monitor</td>
            </td>

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
            <td>
            <img
            src={require("assets/images/cart/gamePad.png")}
            className="h1 Gamepad"
            alt="..."
          />
              <td>H1 Gamepad</td>
            </td>
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
          </tbody>
        </table>
        <br />
        <div className="d-flex justify-content-between">
          <div>
            <button>Return To Shop</button>
            
            </div>
            
          <div> <button>Update Cart</button></div>
        </div>
        <br />
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
    
  );
}

export default cart;
