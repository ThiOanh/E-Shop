import React from "react";

function Checkout(props) {
  return (
    <div className="container">
      <h1>BI</h1>
      <div className="d-flex justify-content-between">
        <div>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
          </form>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <div className="me-5">
              <img src="" alt="" />
              Tên Sản Phẩm 1
            </div>
            <p>950$</p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="me-5">
              <img src="" alt="" />
              Tên Sản Phẩm 2
            </div>
            <p>950$</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
// rsf
