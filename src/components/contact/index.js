import React, { useState } from "react";
import { contactConfig } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "../contact/contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
function Contact(props) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validation = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Ít nhất 2 ký tự")
        .max(50, "Tối đa 50 ký tự")
        .required("Bạn chưa nhập tên!"),
      email: Yup.string()
        .email("Định dạng email không hợp lệ")
        .required("Bạn chưa nhập địa chỉ email!"),
      phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, "Số điện thoại không hợp lệ")
        .required("Bạn chưa nhập số điện thoại!"),

      message: Yup.string()
        .required("Bạn chưa nhập tin nhắn!")
        .max(500, "Tối đa 5000 ký tự"),
    }),
    onSubmit: (values) => {
      setIsSubmitted(true);
  console.log("««««« submit»»»»»", values);
    },
  });

  return (
    <Container>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h4 className="color_sec py-4">
            {" "}
            <FontAwesomeIcon
              icon={faSquarePhone}
              style={{ color: "#ff0019" }}
              className="phone-icon"
            />
            Call to us
          </h4>
          <address>
            <p>{contactConfig.description}</p>
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <hr />
          <h4 className="color_sec py-4">
            {" "}
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#ff0019" }}
              className="phone-icon"
            />
            Write to us
          </h4>
          <address>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
          </address>
        </Col>

        <Col lg="" className="d-flex align-items-center">
          <form className="contact__form w-100">
            <Row>
              <Col lg="4" className="form-group mb-4">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  type="text"
                  value={validation.values.name}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                />
                {validation.errors.name && validation.touched.name && (
                  <p style={{ color: "red" }}> {validation.errors.name}</p>
                )}
              </Col>
              <Col lg="4" className="form-group mb-4">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  value={validation.values.email}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                />
                {validation.errors.email && validation.touched.email && (
                  <p style={{ color: "red" }}> {validation.errors.email}</p>
                )}
              </Col>
              <Col lg="4" className="form-group mb-4">
                <input
                  className="form-control rounded-0"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone"
                  type="phone"
                  value={validation.values.phone}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                />
                {validation.errors.phone && validation.touched.phone && (
                  <p style={{ color: "red" }}>{validation.errors.phone}</p>
                )}
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              value={validation.values.message}
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
            />
            {isSubmitted && validation.errors.message && validation.touched.message && (
              <p style={{ color: "red" }}>{validation.errors.message}</p>
            )}
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="send_button" type="submit" onClick={validation.handleSubmit}>
                  Send Massage
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
