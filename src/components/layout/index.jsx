import React from "react";
import { Row, Col } from "antd";

import styles from "./layout.module.scss";
import Header from "components/header";
import { Outlet } from "react-router-dom";
import Footer from "components/footer";
import SlideBar from "components/slidebar";
import Carousels from "components/carousel";
function Layout(props) {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.section1}>
          <Row>
            <Col>
              <SlideBar />
            </Col>
            <Col>
              <Carousels />
            </Col>
          </Row>
        </div>
      </section>
      <section
        className={styles.container}
        style={{ height: "800px" }}
      ></section>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
