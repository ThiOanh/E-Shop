import React from "react";
import gamepad from "assets/product/gamePad.png";
import laptop from "assets/product/laptop.png";
import { Link } from "react-router-dom";
import { LOCATIONS } from "constants/index";
import "./cart.module.scss";

function cart(props) {
  return (
    <div className="container">
      {/* header link  */}
      <div className="d-flex my-5 text-black-50  ">
        <li>
          <Link to={LOCATIONS.HOME_PAGE}>Home</Link>
        </li>
        <span className="mx-2">/</span>
        {/* active text-body */}
        <a href="/Cart" className="text-body">
          Cart
        </a>
      </div>

      <table class="table">
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
              <div className="d-flex align-items-center my-5">
                <img src={gamepad} alt="gamepad" width={54} height={54}  />
                <div className="mx-2">LCD Monitor</div>
              </div>
            </td>

            <td>
              <div className="my-5">650$</div>
            </td>

            <td>
              <button class="decrease() my-5">-</button>
              <input type="number" max={100} min={1} defaultValue={1} />
              <button class="increase()">+</button>
              <p id="demo"></p>
            </td>
            <td><div className="my-5">650$</div></td>
            <td>
              <button class="btn btn-danger my-5">Delete</button>
            </td>
            
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center my-5">
                <img src={laptop} alt="laptop" width={50} height={50} />
                <div className="mx-2">H1 GamePad</div>
              </div>
            </td>
            <td><div className="my-5">650$</div></td>
            <td>
              <button class="decrease() my-5 ">-</button>
              <input type="number" max={100} min={1} defaultValue={1} />
              <button class="decrease()">+</button>
            </td>
            <td><div className="my-5">650$</div></td>
            <td>
              <button class="btn btn-danger my-5">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="d-flex justify-content-between">
        <div>
        <button type="button" class="btn btn-outline-danger style">Return To Shop</button>
         
        </div>

        <div>
        
        <button type="button" class="btn btn-outline-danger style">Update Cart</button>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <div>
          <input type="text" placeholder="coupon Code" />
          <button class="btn btn-danger">Apply Coupon</button>
        </div>

        <span class="border border-dark">
          <div>
            <text className="text">Cart Total</text>
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
        </span>
      </div>
    </div>
  );
}

export default cart;
