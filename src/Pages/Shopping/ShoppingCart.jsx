import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import style from "./shoppingCartstyle.module.css";

/* <ShippingForm/>
<PaymentForm/> */

export default function ShoppingCart() {
  const location=useLocation()
  console.log(location.pathname)
  return (
    <>
      <div className={style.shoppingContainer} >
        <div className={style.breadcrumbs}>
          <span>Login {">"}</span>
          <span style={{color: (location.pathname.includes('/information'))&&'#d01536'}}>Information {">"}</span>
          <span style={{color: (location.pathname.includes('/shipping'))&&'#d01536'}}>Shipping {">"}</span>
          <span style={{color: (location.pathname.includes('/payment'))&&'#d01536'}}>Payment </span>
        </div>

        <div className={style.shoppingDetails}>

          <Outlet />

        </div>

      </div>
    </>
  );
}
