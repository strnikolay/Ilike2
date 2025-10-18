'use client'
import "./cart.css";
import {FC, useEffect} from "react";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';

const Order:FC = observer(() => {
  const {Cart_Store} = useStore();

  useEffect(()=>{

  },[])

  return (
    <div className="order-wrap container">
      <button className="return-to-cart-btn" onClick={()=>Cart_Store.setIsOrderStage(false)}>Назад в корзину</button> 
      <h1>Оформление заказа</h1>
      <div className="contact">Контактное лицо:{/*Store.user.name},{Store.user.phone*/}</div>

    </div>
  )
});

export default (Order);
