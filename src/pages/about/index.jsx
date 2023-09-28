import React from "react";
import { Row, Col, Carousel } from "antd";

import styles from "./about.module.scss";
function AboutPage(props) {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.about_me}>
          <Row style={{ alignItems: "center" }}>
            <Col lg={12} md={24}>
              <div>
                <h1>Our Story</h1>
                <p>
                  Launced in 2015, Exclusive is South Asia's premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.{" "}
                </p>
                <p>
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </p>
              </div>
            </Col>
            <Col lg={12} md={24}>
              <div className={styles.image_content}>
                <img
                  src={require("assets/images/about/Side Image.png")}
                  alt="our story"
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.dashboard}>
          <Row>
            <Col span={6} className={styles.row}>
              <div className={styles.box_dashboard}>
                <div className={styles.box_icon}>
                  <img
                    src={require("assets/images/about/icon_shop.png")}
                    alt=""
                  />
                </div>
                <h3>10.5K</h3>
                <p>Sallers active our site</p>
              </div>
            </Col>
            <Col span={6} className={styles.row}>
              <div className={styles.box_dashboard}>
                <div className={styles.box_icon}>
                  <img
                    src={require("assets/images/about/Icon-Sale.png")}
                    alt=""
                  />
                </div>
                <h3>10.5K</h3>
                <p>Sallers active our site</p>
              </div>
            </Col>
            <Col span={6} className={styles.row}>
              <div className={styles.box_dashboard}>
                <div className={styles.box_icon}>
                  <img
                    src={require("assets/images/about/Icon-Shopping bag.png")}
                    alt=""
                  />
                </div>
                <h3>10.5K</h3>
                <p>Sallers active our site</p>
              </div>
            </Col>
            <Col span={6} className={styles.row}>
              <div className={styles.box_dashboard}>
                <div className={styles.box_icon}>
                  <img
                    src={require("assets/images/about/Icon-Moneybag.png")}
                    alt=""
                  />
                </div>
                <h3>10.5K</h3>
                <p>Sallers active our site</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.profile}>
          <Carousel dots={{className:styles.dot}} afterChange={onChange}>
            <div className={styles.box_profile}>
              <Row>
                <Col span={8}>
                    <img src={require('assets/images/about/image 46.png')} alt="" />
                    <h1>Tom Cruise</h1>
                    <p>Fouder and Charman</p>
                    <div className={styles.box_icon}>
                        <img src={require('assets/images/about/Icon-Twitter.png')} alt="" />
                        <img src={require('assets/images/about/icon-instagram.png')} alt="" />
                        <img src={require('assets/images/about/Icon-Linkedin.png')} alt="" />
                    </div>
                </Col>
                <Col span={8}>
                <img src={require('assets/images/about/image 51.png')} alt="" />
                <h1>Emma Watson</h1>
                    <p>Maganing Director</p>
                    <div className={styles.box_icon}>
                        <img src={require('assets/images/about/Icon-Twitter.png')} alt="" />
                        <img src={require('assets/images/about/icon-instagram.png')} alt="" />
                        <img src={require('assets/images/about/Icon-Linkedin.png')} alt="" />
                    </div>
                </Col>
                <Col span={8}>
                <img src={require('assets/images/about/image 47.png')} alt="" />
                <h1>Will Smith</h1>
                    <p>Products Design</p>
                    <div className={styles.box_icon}>
                        <img src={require('assets/images/about/Icon-Twitter.png')} alt="" />
                        <img src={require('assets/images/about/icon-instagram.png')} alt="" />
                        <img src={require('assets/images/about/Icon-Linkedin.png')} alt="" />
                    </div>
                </Col>
              </Row>
              
            </div>
            <div>
            <Row>
                <Col span={8}>
                <div className={styles.box_profile}>
                    <img src={require('assets/images/about/image 46.png')} alt="" />
                    <h1>Tom Cruise</h1>
                    <p>Fouder and Charman</p>
                    <div className={styles.box_icon}>
                        <img src={require('assets/images/about/Icon-Twitter.png')} alt="" />
                        <img src={require('assets/images/about/icon-instagram.png')} alt="" />
                        <img src={require('assets/images/about/Icon-Linkedin.png')} alt="" />
                    </div>
                </div>
                </Col>
                <Col span={8}>
                <img src={require('assets/images/about/image 51.png')} alt="" />
                <h1>Emma Watson</h1>
                    <p>Maganing Director</p>
                    <div className={styles.box_icon}>
                        <img src={require('assets/images/about/Icon-Twitter.png')} alt="" />
                        <img src={require('assets/images/about/icon-instagram.png')} alt="" />
                        <img src={require('assets/images/about/Icon-Linkedin.png')} alt="" />
                    </div>
                </Col>
                <Col span={8}>
                <img src={require('assets/images/about/image 47.png')} alt="" />
                <h1>Will Smith</h1>
                    <p>Products Design</p>
                    <div className={styles.box_icon}>
                        <img src={require('assets/images/about/Icon-Twitter.png')} alt="" />
                        <img src={require('assets/images/about/icon-instagram.png')} alt="" />
                        <img src={require('assets/images/about/Icon-Linkedin.png')} alt="" />
                    </div>
                </Col>
              </Row>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
