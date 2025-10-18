'use client'
import "./cart.css";
import {FC, useEffect} from "react";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';
import CartList from "./cart";
import Order from "./order";
//import Product_card  from '@/components/Product_card';



const Cart:FC = observer(() => {
  const {Cart_Store} = useStore();

  useEffect(()=>{

  },[])

  return (
    <div className="">
      {Cart_Store.isOrderStage?<Order/>:<CartList/>}
    </div>
  )
});

export default (Cart);
