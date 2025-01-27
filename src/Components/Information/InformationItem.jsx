import React from 'react'

import style from './informationitemstyle.module.css'
import product from './../../images/productCart.png'

export default function InformationItem({products}) {
  return (
    <div className={style.itemContainer}>
    <div>
      <img src={product}/>
    </div>

    <div className={style.contentContainer}>
      <div className={style.descriptionSection}>
        <span>{products.name}</span>
        <span>{products.description}</span>
        <div className={style.priceContainer}>
          <span className={style.discount}>1400 LE</span>
          <span><strong>{products.price} LE</strong></span>
          <span className={style.promo}>-10%</span>
        </div>
      </div>
      <div className={style.itemQuantityControl}>
        <div className={style.itemQuantity}>
          <button className={style.roundButton}>-</button>
          <span>1</span>
          <button className={style.roundButton}>+</button>
        </div>
        <button className={style.removeButton}>Remove</button>
      </div>
    </div>
  </div>
  )
}
