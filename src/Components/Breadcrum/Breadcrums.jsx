import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import style from "./BreadcrumStyle.module.css";




export default function Breadcrums({setSorted}) {
  const { register, watch } = useForm("all");
  const data = useLoaderData();
  const selectedOption = watch();

  const prevData = useRef([]);

  useEffect(() => {
    const currentvalue = Object.values(selectedOption);
    if (prevData.current.toString() !== currentvalue.toString()) {
      prevData.current = currentvalue;
      setSorted(currentvalue)

    }
  }, [selectedOption]);
  return (
    <div className={style.breadContainer}>
      <div className={style.breadcrums}>Home/Discover/Facial</div>
      <div className={style.crums}>
        <p>Facial</p>
        <p>{data?.data?.products?.length} items</p>
      </div>
      <div className={style.sorting}>
        <form>
          <label htmlFor="sort">Sort by- </label>

          <select className={style.select} {...register("sort")} name="sort">
            <option value="all">Default</option>
            <option value="ascend">Price (low to high)</option>
            <option value="descend">Price (high to low)</option>
          </select>
        </form>
      </div>
    </div>
  );
}
