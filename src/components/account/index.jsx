import avatar from "assets/account/avatar.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContentToggle from "./ContentToggle";
import UploadImage from "./UploadImage";
const country = [
  { country: "Việt Nam", code: "vn" },
  { country: "Thái Lan", code: "th" },
  { country: "Lào", code: "la" },
];
const currentUser = {
  avatar: avatar,
  fullname: "Người dùng 1",
  email: "user@gmail.com",
  phone: "0123456789",
  country: "vn",
  region: "Hà Nội",
  city: "Thủ đô Hà Nội",
  address: "Hàng Rào",
  zip: "999999",
  company: "Company",
  role: "Developer",
  statusBanned: false,
  statusEmailVerify: true,
};

const initialUser = {
  avatar: "",
  fullname: "",
  email: "",
  phone: "",
  country: "",
  region: "",
  city: "",
  address: "",
  zip: "",
  company: "",
  role: "",
  statusBanned: false,
  statusEmailVerify: false,
};
function Account() {
  const [editable, setEdit] = useState(true);
  const [user, setUser] = useState(currentUser);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setError("");
  };

  const handleSwitchMode = (type, data) => {
    setEdit(type);
    setUser(data);
    setError("");
  };

  const handleSubmit = () => {
    const tmpKey = Object.keys(user);
    tmpKey.pop("statusBanned");
    tmpKey.pop("statusEmailVerify");
    let validates = true;
    tmpKey.map((key) => {
      if (user[key] === "") {
        setError("Demo: Vui lòng nhập đủ thông tin");
        validates = false;
        console.log(validates, user[key], key);
      }
      return null;
    });
    if (validates) setEdit(true);
  };

  return (
    <div className="container mb-5">
      {/* header link */}
      <div className="d-flex my-5 text-black-50 form-text">
        <Link to="/" className="text-decoration-none text-secondary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/account" className="text-body text-decoration-none">
          My Account
        </Link>
      </div>
      <h6 className="mb-5">
        Manage My Account
        <small className="ms-3">
          <Link
            className={`text-decoration-none ${
              editable ? "text-body" : "text-secondary opacity-75"
            }`}
            onClick={() => handleSwitchMode(true, currentUser)}
          >
            User
          </Link>
          <b className="mx-2">·</b>
          <Link
            className={`text-decoration-none ${
              !editable ? "text-body" : "text-secondary opacity-75"
            }`}
            onClick={() => handleSwitchMode(false, initialUser)}
          >
            New user
          </Link>
        </small>
      </h6>
      <div className="row gy-4">
        <div className="col-12 col-md-4">
          <div className="shadow-sm rounded-4 p-3">
            <div className="text-center">
              <UploadImage
                image={user.avatar}
                callback={(url) =>
                  handleChange({ target: { name: "avatar", value: url } })
                }
              />
            </div>
            <div className="w-75 mx-auto text-black-50 text-center">
              <small>
                Allowde *.jpeg, *jpg, *png, *.gif max size of 3.1 MB
              </small>
            </div>

            {editable && (
              <ContentToggle
                title="Banned"
                content="Apply disable account"
                statusCheck={user.statusBanned}
              />
            )}

            <ContentToggle
              title="Email Verified"
              content="Disabling this will automatically send the user a
              verification email"
              statusCheck={user.statusEmailVerify}
            />
            {editable && (
              <div className="text-center my-4">
                <button type="button" class="btn btn-outline-danger">
                  Delete User
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="px-3 pt-3 shadow-sm rounded-4">
            <div className="row g-3 mb-0 ">
              <div className="col-12 col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    name="fullname"
                    placeholder="Name"
                    value={user.fullname}
                    onChange={handleChange}
                  />
                  <label for="fullname">Full Name</label>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    value={user.email}
                    onChange={handleChange}
                  />
                  <label for="email">Email address</label>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={user.phone}
                    onChange={handleChange}
                  />
                  <label for="phone">Phone Number</label>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-floating">
                  <select
                    className="form-control"
                    name="country"
                    id="country"
                    value={user.country}
                    onChange={handleChange}
                  >
                    <option value={null}>
                      <small>Select country</small>
                    </option>
                    {country.map((item) => (
                      <option key={"country" + item.country} value={item.code}>
                        {item.country}
                      </option>
                    ))}
                  </select>
                  <label for="country">Country</label>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="region"
                    name="region"
                    placeholder="State/Region"
                    value={user.region}
                    onChange={handleChange}
                  />
                  <label for="region">State/Region</label>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    placeholder="City"
                    value={user.city}
                    onChange={handleChange}
                  />
                  <label for="city">City</label>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="Address"
                    value={user.address}
                    onChange={handleChange}
                  />
                  <label for="address">Address</label>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="zip"
                    placeholder="Zip/Code"
                    value={user.zip}
                    onChange={handleChange}
                  />
                  <label for="zip">Zip/Code</label>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    placeholder="Company"
                    value={user.company}
                    onChange={handleChange}
                  />
                  <label for="company">Company</label>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="role"
                    name="role"
                    placeholder="Role"
                    value={user.role}
                    onChange={handleChange}
                  />
                  <label for="role">Role</label>
                </div>
              </div>
              {error && <div className="col-12 text-danger">{error}</div>}
              <div className="text-end my-3">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={handleSubmit}
                >
                  {editable ? "Save changes" : "Create User"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Account.propTypes = {};

export default Account;
