import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer/Footer";
import style from "./Layout.module.css";
import Navbar from "./../NavBar/Navbar";

export default function Layout() {
  return (
    <div className={style.Container}>
      <Navbar />
      
      
      <Outlet />

      <Footer />
    </div>
  );
}
