import React from 'react'

import style from './informationStyle.module.css'

import InformationItem from './InformationItem'
import Ordersummary from './../Order/Ordersummary'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useCart } from './../Cart/CartContext'

export default function Information() {
 const navigate= useNavigate()
 const {cart}=useCart()

 function handleDiscount(){
  toast.success('Discount Applied')
  navigate('../shipping')
  
 }

  return (

<div className={style.Container}>
  <div>
  {cart?.map((product)=>{return <InformationItem products={product} key={product.id}/>})}


  </div>
        
  <form onSubmit={handleDiscount}>

<Ordersummary/>
</form>

        </div>

    
  )
}
