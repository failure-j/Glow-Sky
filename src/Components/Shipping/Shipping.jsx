import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Ordersummary from "../Order/Ordersummary";
import ShippingForm from "./ShippingForm";
import style from "./ShippingStyle.module.css";


export default function Shipping() {
  const nivagate= useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    
  } = useForm();


  function handleForm(data) {
    console.log(data);
    console.log(errors);
    reset();
    toast.success('Shipping information is successfuly sent', {
      duration: 80000,
      position: 'top-center'},)
    nivagate('../Payment')
  }
  return (
   
      <form onSubmit={handleSubmit(handleForm)}>
         <div className={style.shippingContainer}>
          <Toaster/>
        <ShippingForm register={register} errors={errors} />
        <Ordersummary  />
    </div>

      </form>
  );
}
