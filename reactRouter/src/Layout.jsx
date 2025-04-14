import React from 'react'
import { Outlet } from "react-router";
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

const Layout = () => {
  return (
    <>
    <Header/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout