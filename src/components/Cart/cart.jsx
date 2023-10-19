import React, { useState } from "react";
import gamepad from "assets/product/gamePad.png";
import laptop from "assets/product/laptop.png";
import { Link } from "react-router-dom";
import { LOCATIONS } from "constants/index";
import "./cart.module.scss";

function Cart(props) {
  const [value,setValue]= useState(1)
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

      <table className="table">
        <thead className="header">
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
                <img src={gamepad} alt="gamepad" width={54} height={54} />
                <div className="mx-2">LCD Monitor</div>
              </div>
            </td>

            <td>
              <div className="my-5">650$</div>
            </td>

            <td>
              <button onClick={()=>setValue((value)=>{if(value<=0){return 0} return value-1})} class="decrease() my-5 btn btn-light">-</button>
              <input
                type="number"
                max={100}
                min={1}
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                style={{ height: 35 }}
              />
              <button onClick={()=>setValue((value)=>value+1)} className="my-5 btn btn-light">+</button>
              <p id="demo"></p>
            </td>
            <td>
              <div className="my-5">650$</div>
            </td>
            <td>
              <button className="btn btn-danger my-5">Delete</button>
            </td>
          </tr>


          <tr> 
            <td>
              <div className="d-flex align-items-center my-5">
                <img src={laptop} alt="laptop" width={50} height={50} />
                <div className="mx-2">H1 GamePad</div>
              </div>
            </td>
            <td>
              <div className="my-5">650$</div>
            </td>
            <td>
              <button className="decrease() my-5 btn btn-light ">-</button>
              <input
                type="number"
                max={100}
                min={1}
                defaultValue={1}
                style={{ height: 35 }}
              />
              <button className="decrease() btn btn-light">+</button>
            </td>
            <td>
              <div className="my-5">650$</div>
            </td>
            <td>
              <button className="btn btn-danger my-5">Delete</button>
            </td>
          </tr>


        </tbody>
      </table>
      <br />
      <div className="d-flex justify-content-between ">
        <div>
          <button
            type="button"
            class="btn btn-outline-danger style "
            style={{ height: 56, width:218  }}
          >
            Return To Shop
          </button>
        </div>

        <div>
          <button
            type="button"
            className="btn btn-outline-danger style"
            style={{ height: 56, width :195  }}
          >
            Update Cart
          </button>
        </div>
      </div>
      <br />

      <div className="d-flex justify-content-between my-4">
        <div className="d-flex justify-content-around gap-lg-3">
          <input
            type="text"
            className="form-control border-1 border-dark w-100"
            placeholder="Coupon Code"
            style={{ height: 56, width:300 }}
          />
          <button className="btn btn-danger w-90" style={{ height: 56, width:211, borderRadius:4 }}>
            Apply Coupon
          </button>
        </div>

        <span
          className="border border-dark  "
          style={{ height: 324, width: 470, margin:"top" }}
        >


          <div className="container mt-3"  >
            <h5 className="text" width={100} height={28}  >Cart Total</h5>
            <div className="d-flex justify-content-between my-4 ">
              <p>Subtotal:</p>
              <p>1750$</p>
            </div>
            <hr width="99%" color="black"  size="1px"/>
            <div className="d-flex justify-content-between">
              <p>Shiping:</p>
              <p>Free</p>
            </div>
            <hr width="99%" color="black"  size="1px"/>
            <div className="d-flex justify-content-between">
              <p>Total:</p>
              <p>1750$</p>
            </div>

            <div className="d-flex justify-content-around">
              <Link to={LOCATIONS.CHECKOUT}>
                <button className="btn btn-danger " >Process Checkout</button>
              </Link>
            </div>
          </div>

          

        </span>
      </div>
    </div>
  );
}

export default Cart;
