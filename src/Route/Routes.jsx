// import React from 'react'

import { createBrowserRouter, Navigate } from "react-router-dom";
import ProductsPage from "./../Pages/ProductPage/ProductsPage";
import Layout from "./../Components/Layout/Layout";
import ShoppingCart from "./../Pages/Shopping/ShoppingCart";
import Information from "./../Components/Information/Information";
import Payment from "./../Components/Payment/Payment";
import Shipping from "./../Components/Shipping/Shipping";
import {  Loader as ProductsApi} from "./../Components/Product/Products";

 const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
        loader: ProductsApi,

        
      },
      {
        path: "shoppingCart",
        element: <ShoppingCart />,
        children: [
          { path: "information", element:<Information/> },
          { path: "shipping", element: <Shipping/> },
          { path: "Payment", element: <Payment/> },
          {index:true, element: <Navigate to='information'/>}
        ],
      },
    ],
  },
]);

export default Routes