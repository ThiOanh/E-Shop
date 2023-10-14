import React from "react";
import styles from "./checkout.module.scss";
import gamepad from "assets/product/gamePad.png";
import laptop from "assets/product/laptop.png";
import visa from "assets/images/payment-method/Visa.wine.svg";
import bkash from "assets/images/payment-method/BKash.wine.svg";
import nagad from "assets/images/payment-method/Nagad.wine.svg";
import master_card from "assets/images/payment-method/Mastercard.wine.svg";

function Checkout(props) {
  return (
    <div className="container mb-5">
      {/* header link */}
      <div className="d-flex my-5 text-black-50 form-text">
        <a href="/account">Account</a>
        <span className="mx-2">/</span>
        <a href="/my-account">My Account</a>
        <span className="mx-2">/</span>
        <a href="/product">Product</a>
        <span className="mx-2">/</span>
        <a href="/cart">View Cart</a>
        <span className="mx-2">/</span>
        {/* active text-body */}
        <a href="/cart-checkout" className="text-body">
          CheckOut
        </a>
      </div>
      <h1 className="mb-5">Billing Details</h1>

      <div className="row">
        <div className="col-12 col-md-6">
          <div className="row g-3">
            <div className="col-12 col-lg-10">
              <label htmlFor="first_name" className={`form-label text-black-50 ${styles.required}`}>
                First Name
              </label>
              <input type="text" className={`form-control ${styles.input_info}`} id="first_name" />
            </div>
            <div className="col-12 col-lg-10">
              <label
                htmlFor="company_name"
                className="form-label text-black-50"
              >
                Company Name
              </label>
              <input type="text" className={`form-control ${styles.input_info}`} id="company_name" />
            </div>
            <div className="col-12 col-lg-10">
              <label
                htmlFor="street_address"
                className={`form-label text-black-50 ${styles.required}`}
              >
                Street Address
              </label>
              <input type="text" className={`form-control ${styles.input_info}`} id="street_address" />
            </div>
            <div className="col-12 col-lg-10">
              <label htmlFor="apartment" className="form-label text-black-50">
                Apartment, floor, etc. (optional)
              </label>
              <input type="text" className={`form-control ${styles.input_info}`} id="apartment" />
            </div>
            <div className="col-12 col-lg-10">
              <label htmlFor="town_city" className={`form-label text-black-50 ${styles.required}`}>
                Town/City
              </label>
              <input type="text" className={`form-control ${styles.input_info}`} id="town_city" />
            </div>
            <div className="col-12 col-lg-10">
              <label
                htmlFor="phone_number"
                className={`form-label text-black-50 ${styles.required}`}
              >
                Phone Number
              </label>
              <input type="text" className={`form-control ${styles.input_info}`} id="phone_number" />
            </div>
            <div className="col-12 col-lg-10">
              <label htmlFor="email" className={`form-label text-black-50 ${styles.required}`}>
                Email Address
              </label>
              <input type="email" className={`form-control ${styles.input_info}`} id="email" />
            </div>
            <div className="col-12 col-lg-10">
              <div className="form-check d-flex align-items-center">
                <input
                  className={`form-check-input fs-5 text mt-0 ${styles.checkbox}`}
                  type="checkbox"
                  value=""
                  id="save_info"
                  style={{ marginLeft: "-1.5rem" }}
                />
                <label className="form-check-label mx-3" htmlFor="save_info">
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row justify-content-end mt-2 g-3">
            <div className="col-12 col-md-11">
              <div className="row g-3">
                <div className="col-12 col-lg-10 d-flex justify-content-between align-items-center p-2">
                  <div className="d-flex align-items-center">
                    <img src={gamepad} alt="gamepad" width={50} height="auto" />
                    <div className="mx-2">LCD Monitor</div>
                  </div>
                  <label>$650</label>
                </div>
                <div className="col-12 col-lg-10 d-flex justify-content-between align-items-center p-2">
                  <div className="d-flex align-items-center">
                    <img src={laptop} alt="laptop" width={50} height="auto" />
                    <div className="mx-2">H1 GamePad</div>
                  </div>
                  <label>$1100</label>
                </div>
                <div className="col-12 col-lg-10 g-2 px-2">
                  <div className="d-flex justify-content-between align-items-center my-2">
                    <label>Subtotal:</label>
                    <label>$1750</label>
                  </div>
                  <hr className="hr border-2" />
                  <div className="d-flex justify-content-between align-items-center my-2">
                    <label>Shipping:</label>
                    <label>Free</label>
                  </div>
                  <hr className="hr border-2" />
                  <div className="d-flex justify-content-between align-items-center my-2">
                    <label>Total:</label>
                    <label>$1750</label>
                  </div>
                </div>
                <div className="col-12 col-lg-10 d-flex justify-content-between align-items-center py-1 px-2 g-1">
                  <div className="d-flex align-items-center">
                    <div className="form-check d-flex align-items-center">
                      <input
                        className={`form-check-input fs-5 text mt-0 ${styles.check_input}`}
                        type="radio"
                        name="payment_method"
                        id="payment_method_1"
                        style={{ marginLeft: "-1.5rem" }}
                      />
                      <label
                        className="form-check-label mx-2"
                        htmlFor="payment_method_1"
                      >
                        Bank
                      </label>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={bkash} alt="bkash" width={40} height={40} />
                    <img src={visa} alt="visa" width={40} height={40} />
                    <img
                      src={master_card}
                      alt="master_card"
                      width={40}
                      height={40}
                    />
                    <img src={nagad} alt="nagad" width={40} height={40} />
                  </div>
                </div>
                <div className="col-12 col-md-10 d-flex justify-content-between align-items-center py-1 px-2 g-1">
                  <div className="d-flex align-items-center">
                    <div className="form-check d-flex align-items-center">
                      <input
                        className={`form-check-input fs-5 text mt-0 ${styles.radio}`}
                        type="radio"
                        name="payment_method"
                        id="payment_method_2"
                        style={{ marginLeft: "-1.5rem" }}
                        checked
                      />
                      <label
                        className="form-check-label mx-2"
                        htmlFor="payment_method_2"
                      >
                        Cash on delivery
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-11 mt-3">
              <div className="row g-2">
                <div className="col-12 col-lg-7">
                  <input
                    type="text"
                    className="form-control border-1 border-dark w-100"
                    placeholder="Coupon Code"
                    style={{ height: 45 }}
                  />
                </div>
                <div className="col-12 col-lg-5 ">
                  <button
                    className="btn bg-danger text-white w-100"
                    type="button"
                    style={{ height: 45 }}
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-11 mt-3">
              <div className="row g-2">
                <div className="col-12 col-lg-4 ">
                  <button
                    className="btn bg-danger text-white w-100"
                    type="button"
                    style={{ height: 45 }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
// rsf
