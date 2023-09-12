import React from 'react';

//import styles
import layout from'./layout.module.scss';
import Header from 'components/header';
import { Outlet } from 'react-router-dom';
import Footer from 'components/footer';
function Layout(props) {
    return (
        <>
            <Header/>
            <section style={{height:"600px"}}></section>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;