import React from "react";

import style from "./cartItem.module.css";
import product from "./../../images/productCart.png";
import { useCart } from "./CartContext";

export default function CartItem({ item }) {
  const { setCart } = useCart();
  function handleIncrease() {
    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: (cartItem.quantity + 1) 
            }
          : cartItem
      )
    );
  }


  function handleDecrease() {
    setCart((prev) => {
      
      const updatedCart = prev.map((cartItem) =>
        cartItem.id === item.id
          ? cartItem.quantity > 1 
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : null
          : cartItem
      );
  
      
      return updatedCart.filter((cartItem) => cartItem !== null);
    });
  }

  function handleRemoveItem() {
    setCart((prev) => prev.filter((cartItem) => cartItem.id !== item.id));
  }

  return (
    <div className={style.itemContainer}>
      <div>
        <img src={product} />
      </div>

      <div className={style.contentContainer}>
        <div className={style.descriptionSection}>
          <span>{item.name}</span>
          <span>{item.description}</span>
          <div className={style.priceContainer}>
            <span className={style.discount}>1400 LE</span>
            <span>
              <strong>{item.price} LE</strong>
            </span>
            <span className={style.promo}>-10%</span>
          </div>
        </div>
        <div className={style.itemQuantityControl}>
          <div className={style.itemQuantity}>
            <button onClick={handleDecrease} className={style.roundButton}>
              -
            </button>
            <span>{ item?.quantity}</span>
            <button onClick={handleIncrease} className={style.roundButton}>
              +
            </button>
          </div>
          <button onClick={handleRemoveItem} className={style.removeButton}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
