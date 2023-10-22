import React, { useCallback, useRef } from "react";
import { Row, Col } from "antd";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import styles
import "swiper/css";
import styles from "./about.module.scss";
function AboutPage(props) {
  const swiperOurPRoducts = useRef();
  const handleNext = useCallback(() => {
    swiperOurPRoducts?.current?.swiper?.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    swiperOurPRoducts?.current?.swiper?.slidePrev();
  }, []);
  return (
    <>
      <div className="container">
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
            <Col md={6} xs={12} className={styles.row}>
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
            <Col md={6} xs={12} className={styles.row}>
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
            <Col md={6} xs={12} className={styles.row}>
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
            <Col md={6} xs={12} className={styles.row}>
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
          <button onClick={handlePrev}>prev</button>
          <button onClick={handleNext}>next</button>
          <Swiper
            ref={swiperOurPRoducts}
            spaceBetween={50}
            breakpoints={{
              // Show 1 slide when screen width less than 700px
              0: { slidesPerView: 1 },
              // Show 2 slide when  770px < screen < 1024px
              770: { slidesPerView: 2 },
              // Show 2 slide when screen > 1200px
              1024: { slidesPerView: 3 },
              1980:{ slidesPerView: 4 }
            }}
          >
            <SwiperSlide>
              <div className={styles.box_profile}>
                <img src={require("assets/images/about/image 46.png")} alt="" />
                <h1>Tom Cruise</h1>
                <p>Fouder and Charman</p>
                <div className={styles.box_icon}>
                  <img
                    src={require("assets/images/about/Icon-Twitter.png")}
                    alt=""
                  />
                  <img
                    src={require("assets/images/about/icon-instagram.png")}
                    alt=""
                  />
                  <img
                    src={require("assets/images/about/Icon-Linkedin.png")}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.box_profile}>
                <img src={require("assets/images/about/image 46.png")} alt="" />
                <h1>Tom Cruise</h1>
                <p>Fouder and Charman</p>
                <div className={styles.box_icon}>
                  <img
                    src={require("assets/images/about/Icon-Twitter.png")}
                    alt=""
                  />
                  <img
                    src={require("assets/images/about/icon-instagram.png")}
                    alt=""
                  />
                  <img
                    src={require("assets/images/about/Icon-Linkedin.png")}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.box_profile}>
                <img src={require("assets/images/about/image 46.png")} alt="" />
                <h1>Tom Cruise</h1>
                <p>Fouder and Charman</p>
                <div className={styles.box_icon}>
                  <img
                    src={require("assets/images/about/Icon-Twitter.png")}
                    alt=""
                  />
                  <img
                    src={require("assets/images/about/icon-instagram.png")}
                    alt=""
                  />
                  <img
                    src={require("assets/images/about/Icon-Linkedin.png")}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.box_profile}>
                <img src={require("assets/images/about/image 46.png")} alt="" />
                <h1>Tom Cruise</h1>
                <p>Fouder and Charman</p>
                <div className={styles.box_icon}>
                  <img
                    src={require("assets/images/about/Icon-Twitter.png")}
                    alt=""
                  />
                  <img
                    src={require("assets/images/about/icon-instagram.png")}
                    alt=""
                  />
                  <img
                    src={require("assets/images/about/Icon-Linkedin.png")}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <Carousel dots={{ className: styles.dot }} afterChange={onChange}>
            <div className={styles.box_profile}>
              <Row>
                <Col span={8}>
                  <img
                    src={require("assets/images/about/image 46.png")}
                    alt=""
                  />
                  <h1>Tom Cruise</h1>
                  <p>Fouder and Charman</p>
                  <div className={styles.box_icon}>
                    <img
                      src={require("assets/images/about/Icon-Twitter.png")}
                      alt=""
                    />
                    <img
                      src={require("assets/images/about/icon-instagram.png")}
                      alt=""
                    />
                    <img
                      src={require("assets/images/about/Icon-Linkedin.png")}
                      alt=""
                    />
                  </div>
                </Col>
                <Col span={8}>
                  <img
                    src={require("assets/images/about/image 51.png")}
                    alt=""
                  />
                  <h1>Emma Watson</h1>
                  <p>Maganing Director</p>
                  <div className={styles.box_icon}>
                    <img
                      src={require("assets/images/about/Icon-Twitter.png")}
                      alt=""
                    />
                    <img
                      src={require("assets/images/about/icon-instagram.png")}
                      alt=""
                    />
                    <img
                      src={require("assets/images/about/Icon-Linkedin.png")}
                      alt=""
                    />
                  </div>
                </Col>
                <Col span={8}>
                  <img
                    src={require("assets/images/about/image 47.png")}
                    alt=""
                  />
                  <h1>Will Smith</h1>
                  <p>Products Design</p>
                  <div className={styles.box_icon}>
                    <img
                      src={require("assets/images/about/Icon-Twitter.png")}
                      alt=""
                    />
                    <img
                      src={require("assets/images/about/icon-instagram.png")}
                      alt=""
                    />
                    <img
                      src={require("assets/images/about/Icon-Linkedin.png")}
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col span={8}>
                  <div className={styles.box_profile}>
                    <img
                      src={require("assets/images/about/image 46.png")}
                      alt=""
                    />
                    <h1>Tom Cruise</h1>
                    <p>Fouder and Charman</p>
                    <div className={styles.box_icon}>
                      <img
                        src={require("assets/images/about/Icon-Twitter.png")}
                        alt=""
                      />
                      <img
                        src={require("assets/images/about/icon-instagram.png")}
                        alt=""
                      />
                      <img
                        src={require("assets/images/about/Icon-Linkedin.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <img
                    src={require("assets/images/about/image 51.png")}
                    alt=""
                  />
                  <h1>Emma Watson</h1>
                  <p>Maganing Director</p>
                  <div className={styles.box_icon}>
                    <img
                      src={require("assets/images/about/Icon-Twitter.png")}
                      alt=""
                    />
                    <img
                      src={require("assets/images/about/icon-instagram.png")}
                      alt=""
                    />
                    <img
                      src={require("assets/images/about/Icon-Linkedin.png")}
                      alt=""
                    />
                  </div>
                </Col>
                <Col span={8}>
                  <img
                    src={require("assets/images/about/image 47.png")}
                    alt=""
                  />
                  <h1>Will Smith</h1>
                  <p>Products Design</p>
                  <div className={styles.box_icon}>
                    <img
                      src={require("assets/images/about/Icon-Twitter.png")}
                      alt=""
                    />
                    <img
                      src={require("assets/images/about/icon-instagram.png")}
                      alt=""
                    />
                    <img
                      src={require("assets/images/about/Icon-Linkedin.png")}
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Carousel> */}
        </div>
      </div>
    </>
  );
}

export default AboutPage;
