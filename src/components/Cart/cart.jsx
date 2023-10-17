import React from "react";
import gamepad from "assets/product/gamePad.png";
import laptop from "assets/product/laptop.png";
import { Link } from "react-router-dom";
import { LOCATIONS } from "constants/index";





function cart(props) {
  return (
    <div className="container">
      {/* header link  */}
      <div className="d-flex my-5 text-black-50 form-text">
        <li><Link to={LOCATIONS.HOME_PAGE}>Home</Link></li>
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
              <div className="d-flex align-items-center">
                <img src={gamepad} alt="gamepad" width={100} height="auto" />
                <div className="mx-2">LCD Monitor</div>
              </div>
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
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={laptop} alt="laptop" width={100} height="auto" />
                <div className="mx-2">H1 GamePad</div>
              </div>
            </td>
            <td>550$</td>
            <td>
              <button class="decrease()">-</button>
              <input type="number" max={100} min={1} defaultValue={1} />
              <button class="decrease()">+</button>
            </td>
            <td>19$</td>
            <td>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="d-flex justify-content-between">
        <div>
          <button>Return To Shop</button>
        </div>

        <div>
          {" "}
          <button>Update Cart</button>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <div>
          <input type="text" placeholder="coupon Code" />
          <button class="btn btn-danger">Apply Coupon</button>
        </div>
       
       
        <span class="border border-dark">
        <div >
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
