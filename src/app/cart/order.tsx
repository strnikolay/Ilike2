'use client'
import "./cart.css";
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { mockdata} from '@/api/db';
import {IcartItem, IcartItemParam, IProduct} from "@/store/interfaces";
import { observer } from 'mobx-react';
import Cart_item from "./cart_item";
import CartList from "./cart";
//import Product_card  from '@/components/Product_card';



const Order:FC = observer(() => {
  const {Store, Cart_Store} = useStore();

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
