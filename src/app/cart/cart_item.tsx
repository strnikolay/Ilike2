'use client'
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { data, IProduct, brandList, categoryList, ColorName, ColorRGB } from '@/api/db';
import { observer } from 'mobx-react-lite';
import Add_item from "./cart_add_item";
import { IcartItemParam } from "@/store/IUser";

interface Props {
  item:IProduct;
  itemIndex: number;
}

const Cart_item:FC<Props> = observer(({item, itemIndex}) => {
  const {Store} = useStore();
  const [itemParams, setItemParams] = useState<Array<IcartItemParam>>([]);
  const [itemSumm, setItemSumm] = useState<number>(0);
 
  useEffect(()=>{
    const tempParams = Store.user.cart.find((elInCart)=>item.id===elInCart.id)
    //console.log(tempParams?.params)
    if(tempParams){
      setItemParams(tempParams.params)
    }  
  },[])

  useEffect(()=>{
    let tempsumm = 0
    Store.user.cart[itemIndex].params.forEach((param)=>{
      if(param.count){
        tempsumm = tempsumm + (item.price * param.count)
      }
    })
    setItemSumm(tempsumm)
  },[Store.user.cart])

  const addItemHandler = () => {
    const tempItem = {"size":0, color:0, count:0}
    Store.addItemParamsToDB(itemIndex, tempItem)
  }

  return (
    <details className="cart-item">
      <summary>
        <div>
          {item.id} {categoryList[item.cat-1].cat_title} {brandList[item.brand]}
        </div>
        <div>Цена за ед: {item.price}</div>
        <div>Выбраное всего:</div>
        <div>Сумма: {itemSumm}</div>
      </summary>
      {itemParams.length>0?
        itemParams.map((params, index)=>
          <Add_item key={index} item={item} params={params} itemIndex={itemIndex} index={index}/>
        ):
        null
      }
              
      <button className="add-btn" onClick={addItemHandler}>Добавить +</button>
    </details>

  )
});

export default (Cart_item);
