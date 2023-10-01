import React from "react";

import styles from "./layout.module.scss";
import Header from "components/header";
import { Outlet } from "react-router-dom";
import Footer from "components/footer";
import SlideBar from "components/slidebar";
import Carousels from "components/carousel";
import SlideBarMobile from "components/slidebar/slidebarMobile";
function Layout(props) {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.section1}>
          <SlideBar />
          <Carousels />
          <SlideBarMobile />
        </div>
      </section>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
