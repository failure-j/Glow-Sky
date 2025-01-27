import React from "react";
import style from "./productItem.module.css";
import products from "./../../images/product.png";
import { useCart } from "./../Cart/CartContext";

export default function ProductItem({ Product }) {
  const { setCart } = useCart();

  function handleAddToCart(product) {
    setCart((cartitem) => {
      return [...cartitem, {...product, quantity:1}];
    });
  }

  return (
    <div className={style.productContainer}>
      <div className={style.images}>
        <img src={products}></img>
        <div className={style.options}>
          {Product.discount && (
            <span className={style.promo}>-{Product.discount * 100}%</span>
          )}
          <span className={style.wishlist}>&hearts;</span>
        </div>
      </div>

      <div className={style.contentContainer}>
        <div className={style.descriptionContainer}>
          <span>
            <strong>{Product.name}</strong>
          </span>
          <span>{Product.description}</span>
          <div>rating container</div>
        </div>
        <div className={style.cost}>
          <span>
            <strong>EGP{Product.price}</strong>
          </span>
          {Product.discount && (
            <span className={style.discount}>
              EGP {(Product.discount * Product.price) + Product.price}
            </span>
          )}
        </div>
        <button
          onClick={() => handleAddToCart(Product)}
          className={style.primary}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
