'use client'
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { brandList, categoryList} from '@/api/db';
import {IProduct, IcartItemParam} from "@/store/interfaces";
import { observer } from 'mobx-react-lite';
import ParamsInProduct from "./ParamsInProduct";

interface Props {
  item:IProduct;
  itemIndex: number;
}

const Cart_item:FC<Props> = observer(({item, itemIndex}) => {
  const {Store, Cart_Store} = useStore();
  const [itemParams, setItemParams] = useState<IcartItemParam[]>([]);
  const [itemSumm, setItemSumm] = useState<number>(0);
 
  useEffect(()=>{
    const tempParams = Store.user.cart.find((elInCart)=>item.id===elInCart.id)
    console.log(tempParams?.params)
    if(tempParams){
      setItemParams(tempParams.params)
    }  
  },[Store.user.cart[itemIndex].params])

  useEffect(()=>{
    let tempsumm = 0
    //console.log("сумма", tempsumm)
    Store.user.cart[itemIndex].params.forEach((param)=>{
      if(param.count>0){
        tempsumm = tempsumm + (item.price * param.count)
      }
    })
    console.log("сумма", tempsumm)
    setItemSumm(tempsumm)
  },[Store.user.cart, itemParams])

  return (
    <details className="cart-item">
      <summary>
        <div>
          {item.id} {categoryList[item.cat-1]} {brandList[item.brand]}
        </div>
        <div>Цена за ед: {item.price}</div>
        <div>Выбраное всего:</div>
        <div>Сумма: {itemSumm}</div>
      </summary>
      {itemParams.length>0?
        itemParams.map((params, index)=>
          <ParamsInProduct key={index} item={item} params={params} itemIndex={itemIndex} paramsIndex={index}/>
        ):
        null
      }
              
      <button 
        className="add-btn" 
        onClick={()=>Cart_Store.addNewParamsToProductInCart(itemIndex)}
      >
        Добавить +
      </button>
    </details>

  )
});

export default (Cart_item);
