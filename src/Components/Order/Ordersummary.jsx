import React from "react";
import style from "./orderSummaryStyle.module.css";

export default function Ordersummary() {
 
  return (
    <div className={style.orderContainer}>
      <p>
        {" "}
        <strong>Order summary</strong>{" "}
      </p>
      <div className={style.contentContainer}>
        <div className={style.content}>
          <div className={style.subContent}>
            <span>Subtotal (1 item)</span> <span>EGP 1280</span>
          </div>

          <div className={style.subContent}>
            <span>Discount</span> <span>-EGP 49</span>
          </div>

          <div className={style.subContent}>
            <span>Shipping fee</span> <span>FREE</span>
          </div>
        </div>

        <div className={style.price}>
          <span>
            <strong>Total</strong>(inclusive of VAT)
          </span>
          <span>
            <strong>EGP 1221</strong>
          </span>
        </div>
      </div>
      <button  className={style.button}>
        Continue
      </button>
    </div>
  );
}
