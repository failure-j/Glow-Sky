import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Ordersummary from "../Order/Ordersummary";
import PaymentForm from "./PaymentForm";
import style from "./PaymentStyle.module.css";

export default function Payment() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function handleForm(data) {
    console.log(data);
    reset();
    toast.success('Shipping information is successfuly sent', {
      duration: 80000,
      position: 'top-center', hi},)
    
  }
  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div className={style.paymentContainer}>
        <Toaster />
        <PaymentForm register={register} errors={errors} />
        <Ordersummary />
      </div>
    </form>
  );
}
