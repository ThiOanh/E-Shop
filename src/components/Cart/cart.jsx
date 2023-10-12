import React from "react";

function Cart(props) {
  return (
    <div className="container">
      <div>
        <table className="table table-striped">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
          <tr style={{border:"1px solid black"}}>
            <td>Ltd Monitor</td>
            <td>20$</td>
            <td>
              <input type="number" max={100} min={1} defaultValue={1} />
            </td>
            <td>19$</td>
            <td>
              <button type="button" class="btn btn-danger">
                Danger
              </button>
            </td>
          </tr>
          <tr>
            <td>Ltd Monitor</td>
            <td>20$</td>
            <td>
              <input type="number" max={100} min={1} defaultValue={1} />
            </td>
            <td>19$</td>
            <td>
              <button type="button" class="btn btn-danger">
                Danger
              </button>
            </td>
          </tr>
        </table>
        <hr/>
        <div className="d-flex justify-content-between">
          <div>Return Shop</div>
          <div>Update Cart</div>
        </div>
        <hr/>
        <div className="d-flex justify-content-between">
          <div>
            <input type="text" placeholder="coupon code" />
            <button>apply code</button>
          </div>
          <div>
            <h3>Cart</h3>
            <div className="d-flex justify-content-between">
              <p>Subtotal:</p>
              <p>1750$</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Shiping:</p>
              <p>free</p>
            </div>
            <div>
            <button className="btn btn-danger">Process Checkout</button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Cart;
