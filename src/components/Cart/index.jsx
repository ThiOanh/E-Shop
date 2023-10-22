import React, { useState } from "react";
import gamepad from "assets/product/gamePad.png";
import laptop from "assets/product/laptop.png";
import { Link } from "react-router-dom";
import { LOCATIONS } from "constants/index";
import styles from "./cart.module.scss";
import { Checkbox } from "antd";

function Cart(props) {
  const [value, setValue] = useState(1);
  return (
    <div className={`container`}>
      {/* header link  */}
      <div className={`row ${styles.custom_row} ${styles.row_header_link}`}>
        <div className={`col-12 ${styles.custom_col}`}>
          <div className={styles.header_link}>
            <div className={styles.parent_link}>
              <Link to={LOCATIONS.HOME_PAGE}>Home /</Link>
            </div>
            <div className={styles.children_link}>
              <Link to={LOCATIONS.CART}>Cart</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.block_cart}>
        {/* cart  */}
        <div className={"container my-5"}>
          {/* Category */}
          <div className={`row ${styles.custom_row} ${styles.row_category}`}>
            {/* category checkbox  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.category_checkbox}>
                {/* <form action="/action_page.php"> */}
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  style={{ height: 21, width: 21 }}
                />
                {/* </form> */}
              </div>
            </div>

            {/* category product */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.category_product}>Product</div>
            </div>

            {/* category price  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.category_price}>Price</div>
            </div>

            {/* category Quantity  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.category_quantity}>Quantity</div>
            </div>

            {/* category Subtotal  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.category_subtotal}>Subtotal</div>
            </div>

            {/* category operation  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.category_operate}>operate</div>
            </div>
          </div>
          <br />
          {/* Detail Product */}
          <div
            className={`row ${styles.custom_row} ${styles.row_detailproduct}`}
          >
            {/* detail checkbox  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.detail_checkbox}>
                {/* <form action="/action_page.php"> */}
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  style={{ height: 21, width: 21 }}
                />
                {/* </form> */}
              </div>
            </div>

            {/* detail product */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.detail_product}>
                <div className="d-flex center">
                  <img
                    src={require("assets/images/cart/monitor.png")}
                    alt="..."
                    width={54}
                    height={54}
                  />
                  <div className="mx-2 my-3">LCD Monitor</div>
                </div>
              </div>
            </div>

            {/* detail price  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.detail_price}>$650</div>
            </div>

            {/* detail Quantity  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.detail_quantity}>
                <div className="col">
                  {" "}
                  <button
                    onClick={() =>
                      setValue((value) => {
                        if (value <= 0) {
                          return 0;
                        }
                        return value - 1;
                      })
                    }
                    className="decrease() btn btn-light"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    max={100}
                    min={1}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    style={{ height: 35 }}
                  />
                  <button
                    onClick={() => setValue((value) => value + 1)}
                    className="my-5 btn btn-light"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* detail Subtotal  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.detail_subtotal}>$650</div>
            </div>

            {/* detail operation  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.detail_operation}>
                <button className="btn btn-danger  ">Delete</button>
              </div>
            </div>
          </div>
          {/* <hr  width="90%"/> */}
          <br />
          {/* Detail Product */}
          <div
            className={`row ${styles.custom_row} ${styles.row_detailproduct}`}
          >
            {/* detail checkbox  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.detail_checkbox}>
                {/* <form action="/action_page.php"> */}
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  style={{ height: 21, width: 21 }}
                />
                {/* </form> */}
              </div>
            </div>

            {/* detail product */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.detail_product}>
                <div className="d-flex center">
                  <img
                    src={require("assets/images/cart/gamePad.png")}
                    alt="..."
                    width={54}
                    height={54}
                  />
                  <div className="mx-2 my-3">GamePad</div>
                </div>
              </div>
            </div>

            {/* detail price  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.detail_price}>$650</div>
            </div>

            {/* detail Quantity  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.detail_quantity}>
                <div className="col">
                  {" "}
                  <button
                    onClick={() =>
                      setValue((value) => {
                        if (value <= 0) {
                          return 0;
                        }
                        return value - 1;
                      })
                    }
                    className="decrease() btn btn-light"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    max={100}
                    min={1}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    style={{ height: 35 }}
                  />
                  <button
                    onClick={() => setValue((value) => value + 1)}
                    className="my-5 btn btn-light"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* detail Subtotal  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.detail_subtotal}>$650</div>
            </div>

            {/* detail operation  */}
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.detail_operation}>
                <button className="btn btn-danger  ">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div
          className={`row d-flex justify-content-between ${styles.custom_row} ${styles.row_return_update}`}
        >
          <div
            className={`col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
          >
            <div className={styles.return}>
              <button type="button" className="btn btn-outline-danger style ">
                Return To Shop
              </button>
            </div>
          </div>
          <div
            className={` col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 ${styles.custom_col}`}
          >
            <div className={styles.update}>
              <button
                type="button"
                className="  btn btn-outline-danger style"
                style={{ height: 56, width: 218 }}
              >
                Update Cart
              </button>
            </div>
          </div>
        </div>
        {/* <hr  width="90%"/> */}

        <div className="d-flex justify-content-between my-4">
          <div className="d-flex justify-content-around gap-lg-3">
            <input
              type="text"
              className="form-control border-1 border-dark w-100"
              placeholder="Coupon Code"
              style={{ height: 56, width: 300 }}
            />
            <button
              className="btn btn-danger w-90"
              style={{ height: 56, width: 211, borderRadius: 4 }}
            >
              Apply Coupon
            </button>
          </div>

          <span
            className="border border-dark  "
            style={{ height: 324, width: 470, margin: "top" }}
          >
            <div className="container mt-3">
              <h5 className="text" width={100} height={28}>
                Cart Total
              </h5>
              <div className="d-flex justify-content-between my-4 ">
                <p>Subtotal:</p>
                <p>1750$</p>
              </div>
              <hr width="99%" color="black" size="1px" />
              <div className="d-flex justify-content-between">
                <p>Shiping:</p>
                <p>Free</p>
              </div>
              <hr width="99%" color="black" size="1px" />
              <div className="d-flex justify-content-between">
                <p>Total:</p>
                <p>1750$</p>
              </div>

              <div className="d-flex justify-content-around">
                <Link to={LOCATIONS.CHECKOUT}>
                  <button className="btn btn-danger ">Process Checkout</button>
                </Link>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
