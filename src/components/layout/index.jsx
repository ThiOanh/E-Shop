import React from 'react';

import styles from './layout.module.scss';
import Header from 'components/header';
import { Outlet } from 'react-router-dom';
import Footer from 'components/footer';
import SlideBar from 'components/slidebar';
function Layout(props) {
    return (
        <>
            <Header/>
            <SlideBar/>
            <section className={styles.container} style={{height:"800px"}}>

            </section>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;