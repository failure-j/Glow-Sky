import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "./CartContext";
import CartItem from "./CartItem";
import style from "./cartStyle.module.css";

export default function Cart({ setToggle }) {
  const { cart } = useCart();
  const navigate = useNavigate();


  function handleContinue() {
    navigate("shoppingCart");
    setToggle((value) => !value)
  }

  const El = useRef(null);

  function handlePropagation(e) {
    e.stopPropagation();
  }

  return (
    <div ref={El} onClick={handlePropagation} className={style.CartContainer}>
      <div className={style.cartHeader}>
        <div className={style.header}>
          <span>
            <strong>Shopping cart</strong>
          </span>
          <span>
            <button onClick={() => setToggle((value) => !value)}>
              &times;
            </button>
          </span>
        </div>
        <p className={style.offer}>
          You're just 320 LE away from free shipping!
        </p>
      </div>
      <div className={style.cartContent}>
        {cart.map((cartitem) => {
          console.log(cartitem)
          return <CartItem item={cartitem} key={cartitem.id}/>;
        })}
      </div>
      <div className={style.cartFooter}>
        <div className={style.footerContent}>
          <div className={style.cost}>
            <span>
              <strong>Estimated total</strong>
            </span>
            <span>
              <strong>LE 3000</strong>
            </span>
          </div>
          <button onClick={handleContinue} className={style.primary}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
