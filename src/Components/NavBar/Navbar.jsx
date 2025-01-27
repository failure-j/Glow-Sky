import React from "react";
import { useState } from "react";

import BlurContainer from "./../Cart/blurContainer";
import Cart from "./../Cart/Cart";
import EmptyCart from "./../Cart/EmptyCart";

import { useCart } from "./../Cart/CartContext";

import style from "./Navstyle.module.css";
import Search from "./../../images/Search.png";
import Carts from "./../../images/Cart.png";
import Heart from "./../../images/Heart.png";
import Location from "./../../images/Location.png";
import User from "./../../images/User.png";
import Polygon from "./../../images/Polygon.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { cart } = useCart();
  return (
    <>
      {/* {toggle && <Cart setToggle={setToggle}/>} */}
      {toggle && (
        <BlurContainer setToggle={setToggle}>
          {" "}
          {cart?.length !== 0 ? (
            <Cart setToggle={setToggle} />
          ) : (
            <EmptyCart setToggle={setToggle} />
          )}
        </BlurContainer>
      )}

      <div className={style.navContainer}>
        <div className={style.navPromo}>
          <p>Free standard shipping to Egypt over 1600EGP</p>
        </div>
        <div className={style.nav}>
          <div className={style.SearchContainer}>
            <img src={Search} />
            <input
              className={style.searchInput}
              type={"search"}
              placeholder="Hi, what are you looking for?"
            />
            <span>
              <img src={Polygon} />
            </span>
          </div>

          <div className={style.BrandContainer}>
            <div style={{ fontSize: "32px" }}>
              <strong>GlowSky</strong>
            </div>
            <span>SKINCARE & MAKEUP</span>
          </div>

          <div style={{ display: "flex", gap: "32px" }}>
            {/* <img src={Carts} onClick={() => setToggle((value) => !value)} /> */}
            <img src={Location} />
            <img src={User} />
            <img src={Heart} />

            <button
              style={{ backgroundColor: "inherit" }}
              onClick={() => setToggle((value) => !value)}
            >
              &#x1F6D2;
            </button>
          </div>
        </div>
        <div className={style.links}>
          <p>Discover</p>
          <p>New + Bestsellers</p>
          <p>Brands</p>
          <p>Perumes</p>
          <p>Facial</p>
          <p>Body</p>
          <p>Hair</p>
          <p>Makeup</p>
          <p>Early Black Friday Deals</p>
        </div>
      </div>
    </>
  );
}
