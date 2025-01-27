import React from "react";

import style from "./paymentformStyle.module.css";

export default function PaymentForm({ register, errors }) {
  return (
    <div className={style.shippingContainer}>
      <p>
        <strong>Payment information</strong>
      </p>
      <div className={style.formContainer}>
        <div className={style.field}>
          <label>Payment method </label>
          <div className={style.border}>
            <input
              {...register("Credit_DebitCard ", {
                required: "Please Fill Credit info",
              })}
              placeholder="Credit/Debit card"
              type={"radio"}
              value="Credit"
            />{" "}
            <span>Credit/Debit card</span>{" "}
            {errors?.Credit_DebitCard && (
            <p style={{ color: "red" }}> {errors?.Credit_DebitCard?.message}</p>
          )}
          </div>
         
          <div className={style.border}>
            {" "}
            <input {...register("Cash_On_Delivery ", {
                required: "Please Fill Credit info",
              })} placeholder="Cash On Delivery (COD)" type={"radio"} />{" "}
            <span>Cash On Delivery (COD)</span>{" "}
            {errors?.Cash_On_Delivery && (
            <p style={{ color: "red" }}> {errors?.Cash_On_Delivery?.message}</p>
          )}
          </div>
        </div>

        <div className={style.formContainer}>
          <div className={style.field}>
            <label>Card information</label>
            <input
              {...register("Card_info", {
                required: "Please Fill Credit info",
              })}
              placeholder="1234 1234 1234 1234"
            />
            {errors?.Card_info && (
              <p style={{ color: "red" }}> {errors?.Card_info?.message}</p>
            )}
          </div>

          <div className={style.nestedForm}>
            <div className={style.field}>
              <label>Expiration date</label>
              <input
                {...register("cardExpiry", {
                  required: "Please Fill Credit Expiry",
                })}
                placeholder="MM/YY"
              />
              {errors?.cardExpiry && (
                <p style={{ color: "red" }}> {errors?.cardExpiry?.message}</p>
              )}
            </div>
            <div className={style.field}>
              <label>Security code</label>
              <input
                {...register("cardSecurity", {
                  required: "Please Fill Credit Secuirty",
                  maxLength: { value: 3, message: "Max length is 3" },
                })}
                placeholder="CVC"
                max={3}
              />
              {errors?.cardSecurity && (
                <p style={{ color: "red" }}> {errors?.cardSecurity?.message}</p>
              )}
            </div>
          </div>

          <div className={style.field}>
            <label>Card holder name</label>
            <input
            inputMode="text"
              {...register("cardName", { required: "Please Fill Card Name" })}
              placeholder="Enter Card holder name"
            />
            {errors?.cardName && (
              <p style={{ color: "red" }}> {errors?.cardName?.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
