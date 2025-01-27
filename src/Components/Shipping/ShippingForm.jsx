import React from "react";
import { useForm } from "react-hook-form";
import style from "./ShippingformStyle.module.css";

export default function ShippingForm({ register, errors }) {

  function handleKeyDown(e) {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
    ];
    if (
      !/[0-9]/.test(e.key) &&
      !allowedKeys.includes(e.key) &&
      !/^\+/.test(e.key)
    ) {
      e.preventDefault();
    }
  }
  return (
    // <form onSubmit={handleSubmit}>
      <div className={style.shippingContainer}>
        <p>
          <strong>Shipping address</strong>
        </p>
        <div className={style.formContainer}>
          <select
            defaultValue={""}
            {...register("Country", { required: "This field is required" })}
            placeholder="Country/region"
            name="Country"
            id="Counrty"
          >
            <option value="Egypt">Egypt</option>
          </select>
          { errors?.Country&&<p style={{color:'red'}}>{errors?.Country?.message}</p>}
          <div className={style.nestedForm}>
            <input
              {...register("FirstName", { required: "This field is required" })}
              placeholder="First name"
              type="text"
            />
            {errors?.FirstName && (
              <p style={{ color: "red" }}>{errors?.FirstName?.message}</p>
            )}
            <input
              {...register("LastName", { required: "This field is required" })}
              placeholder="Last name"
              type="text"
            />
            {errors?.LastName && (
              <p style={{ color: "red" }}>{errors?.LastName?.message}</p>
            )}
          </div>
          <input
            {...register("Address", { required: "This field is required" })}
            placeholder="Address"
            type="text"
          />
          {errors?.Address && (
            <p style={{ color: "red" }}>{errors?.Address?.message}</p>
          )}

          <input
            {...register("Apt_Flat", { required: "This field is required" })}
            placeholder="Apt/Flat"
            type="text"
          />
          {errors?.Apt_Flat && (
            <p style={{ color: "red" }}>{errors?.Apt_Flat?.message}</p>
          )}

          <div className={style.nestedForm}>
            <select
              {...register("city", { required: "This field is required" })}
              name="city"
              id="city"
            >
              <option value="">please select city</option>
              <option value="Giza">Giza</option>
            </select>
            {errors?.city && (
              <p style={{ color: "red" }}>{errors?.city?.message}</p>
            )}

            <select
              {...register("Gov", { required: "This field is required" })}
              name="Gov"
              id="Gov"
            >
              <option value="">please select Gov</option>
              <option value="Cairo">Cairo</option>
            </select>
            {errors?.Gov && (
              <p style={{ color: "red" }}>{errors?.Gov?.message}</p>
            )}

            <input
              {...register("PostalCode", {
                pattern: {
                  value: "/^d{4}$",
                  message: "enter a valid Zip code",
                },
              })}
              placeholder="Postal code (optional)"
              type="text"
            />
            {errors?.PostalCode && (
              <p style={{ color: "red" }}>{errors?.PostalCode?.message}</p>
            )}
          </div>
          <input
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value: "/^+2d{11}$/",
                message: "please enter a valid phone",
              },
              maxLength: {
                value: 13,
                message: "Phone number cannot exceed 13 characters",
              },
            })}
            placeholder="Phone number"
            type="tel"
            inputMode="numeric"
            onKeyDown={handleKeyDown}
          />
          {errors?.phone && (
            <p style={{ color: "red" }}>{errors?.phone?.message}</p>
          )}
        </div>
        {/* <input type="submit" /> */}
      </div>
    // </form>
  );
}
