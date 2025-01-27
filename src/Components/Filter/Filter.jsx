import React from "react";
import { useEffect } from "react";
import { Children } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./filterStyle.module.css";

export default function Filter({ setfitlered }) {
  const { register, watch } = useForm([]);
  const [isOpen, setisOpen] = useState(null);

  const selectedFilters = watch() ;
  const prevData = useRef([]);

  const handleClick = (e, value) => {
    e.preventDefault();
    setisOpen((prev) => (prev == value ? null : value));
  };

  useEffect(() => {
    const filteredData = Object.keys(selectedFilters).filter((k) => {
      return selectedFilters[k] === true;
    });

    if (prevData.current.toString() !== filteredData.toString()) {
      prevData.current = filteredData;
      setfitlered(filteredData);
    }
  }, [selectedFilters, setfitlered]);

  return (
    <div className={style.filterContainer}>
      <form>
        <div className={style.filterSection}>
          <div className={style.filterTitle}>
            <span>Product type</span>{" "}
            <button
              style={{ backgroundColor: "whiteSmoke", color: "black" }}
              onClick={(e) => handleClick(e, 0)}
            >
              {isOpen === 0 ? "^" : "v"}
            </button>
          </div>
          {isOpen === 0 && (
            <div className={style.filterSubSection}>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("eyeCare")} />
                <span>Eye care</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("Moisturizer")} />
                <span>Moisturizer</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("sunCare")} />
                <span>Sun care</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("dailyCare")} />
                <span>Daily care</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("nightCare")} />
                <span>Night care</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("Brightening")} />
                <span>Brightening</span>
              </div>
            </div>
          )}
        </div>

        <div className={style.filterSection}>
          <div className={style.filterTitle}>
            <span>Skin type</span>{" "}
            <button
              style={{ backgroundColor: "whiteSmoke", color: "black" }}
              onClick={(e) => handleClick(e, 1)}
            >
              {isOpen === 1 ? "^" : "v"}
            </button>
          </div>

          {isOpen === 1 && (
            <div className={style.filterSubSection}>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("eyeCare")} />
                <span>Eye care</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("Moisturizer")} />
                <span>Moisturizer</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("sunCare")} />
                <span>Sun care</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("dailyCare")} />
                <span>Daily care</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("nightCare")} />
                <span>Night care</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("Brightening")} />
                <span>Brightening</span>
              </div>
            </div>
          )}
        </div>

        <div className={style.filterSection}>
          <div className={style.filterTitle}>
            <span>Ingredient Preferences</span>{" "}
            <button
              style={{ backgroundColor: "whiteSmoke", color: "black" }}
              onClick={(e) => handleClick(e, 2)}
            >
              {isOpen === 2 ? "^" : "v"}
            </button>
          </div>

          {isOpen === 2 && (
            <div className={style.filterSubSection}>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("eyeCare")} />
                <span>Eye care</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("Moisturizer")} />
                <span>Moisturizer</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("sunCare")} />
                <span>Sun care</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("dailyCare")} />
                <span>Daily care</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("nightCare")} />
                <span>Night care</span>
              </div>
              <div className={style.checkContainer}>
                <input type={"checkbox"} {...register("Brightening")} />
                <span>Brightening</span>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
