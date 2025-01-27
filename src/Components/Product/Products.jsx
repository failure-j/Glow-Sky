import React from "react";
import { useLoaderData } from "react-router-dom";
import { useCart } from "./../Cart/CartContext";
import { GetProduct } from "./../../Serves/ProductApi";
import ProductItem from "./productItem";
import style from "./productsStyle.module.css";

export default function Products({data}) {


  
  // const data = useLoaderData();
  const {cart}=useCart()

  return (
    <div className={style.productsContainer}>
      <div className={style.products}>
        {data?.map((product) => {
          return <ProductItem Product={product} key={product.id}  />;
        })}
      </div>
      <div className={style.paginationContainer}>
        <p>showing 24 of 57 items</p>
        <button className={style.paginationButton}>Load more products</button>
      </div>
    </div>
  );
}

export async function Loader() {
  const data = await GetProduct();
  return data;
}

