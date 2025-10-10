'use client'
import "./cart.css";
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { mockdata, brandList, categoryList } from '@/api/db';
import {IProduct} from "@/store/interfaces";
import { observer } from 'mobx-react-lite';
import Cart_item from "./cart_item";
//import Product_card  from '@/components/Product_card';



const Cart:FC = observer(() => {
  const {Store, Cart_Store} = useStore();
  const [cartList, setCartList] = useState<Array<IProduct>>([])
 
  useEffect(()=>{
      const tempArr:Array<IProduct> = []
      Store.user.cart.forEach((elInCart)=>{
        const el = mockdata.find((elInDB)=> elInDB.id===elInCart.id)
        if(el){tempArr.push(el)}
      })
      //console.log(tempArr)
      setCartList(tempArr)
  },[Store.user.cart])

  return (
    <div className="cart-wrap container">
      <h1>Корзина товаров</h1>
      <div className="cart-product-wrap">
          {cartList.map((el:IProduct,index:number)=>
            <Cart_item key={index} item={el} itemIndex={index}/>
          )}
      </div>
      <button className="order-next-btn">Оформить заказ</button>  
    </div>
  )
});

export default (Cart);
