import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Breadcrums from "./../../Components/Breadcrum/Breadcrums";
import Filter from "./../../Components/Filter/Filter";
import Products from "./../../Components/Product/Products";
import style from "./ProductsPageStyle.module.css";

export default function ProductsPage() {
  const [filtered, setFiltered] = useState();
  const [sorted, setSorted] = useState();

  const data = useLoaderData();

const acutalData=handleFilterAndSort(data, filtered, sorted)

  function handleFilterAndSort(data, filtered, sorted) {
    
    let filteredData=data?.data?.products
    

    if (filtered && filtered.length>0) {
      return filteredData=filteredData?.filter((product) => {
        return filtered?.some((category)=>category?.includes(product?.category))
      });
    }

    if (sorted) {
      const sortedData=[...filteredData]

      if (sorted == "ascend") {
        return (sortedData?.sort((a, b) => {
         return a.price - b.price;
        }));
      }

      if (sorted == "descend") {
        return (sortedData?.sort((a, b) => {
         return b.price - a.price;
        }));
      }

      return sortedData
    } 
    
    else {
      // console.log(filteredData)
      return (filteredData);
    }
  }
  


  return (
    <div className={style.outerContainer}>
      <Breadcrums setSorted={setSorted} />

      <div className={style.innerContainer}>
        <Filter setfitlered={setFiltered} />

        <Products data={acutalData} />
      </div>
    </div>
  );
}
