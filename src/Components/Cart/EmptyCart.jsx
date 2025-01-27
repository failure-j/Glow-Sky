import React from "react";
import style from "./EmptyCartstyle.module.css";

import box from "./../../images/Box.png";
import shadow from "./../../images/shadow.svg";

import emptys from "./../../images/empty.svg";

export default function EmptyCart({ setToggle }) {
  return (
    <div className={style.emptyContainer}>
      <div className={style.emptyHeader}>
        <div className={style.headerContent}>
          <span>
            <strong>Shopping cart</strong>
          </span>
          <span>
            <button onClick={() => setToggle((value) => !value)}>
              &times;
            </button>
          </span>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.content}>
          <div className={style.image}>
            <img src={box}></img>
            <img src={shadow}></img>
          </div>
          <p>
            {" "}
            <strong>There’s nothing on the cart</strong>
          </p>
        </div>
      </div>
      <div className={style.emptyContent}>
        <button className={style.primary}>Start shopping</button>
      </div>
    </div>
  );
}

{
  /* <div className={style.content}>
<div className={style.image} >
  <img src={box}></img>
  <img src={shadow}></img>
</div>
<p >There’s nothing on the cart</p>
</div> */
}

{
  /* <img  src={emptys} ></img> */
}
