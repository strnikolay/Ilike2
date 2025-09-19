'use client'

import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { data, brandList, IProdut } from '@/api/db';
import Product_card  from '@/components/Product_card';
import { Category_select } from "@/app/catalog/category_select";
import { observer } from 'mobx-react-lite';
import './catalog.css'
import Filter from "./filter";
//import { LoginForm } from "@/app/(login)/page";

const Catalog:FC = observer (() => {
  const {Store} = useStore()
  const [ndata, setData] = useState<Array<IProdut>>(data)

  useEffect (()=>{
    /*console.log("111",ndata)*/
    const arr:Array<IProdut> = []
    Store.ProductFiltredByCatagory.forEach((el:IProdut)=> {
      Store.SelectedBrand.forEach((brand:string)=>{
        if(brand===brandList[el.brand]){
          arr.push(el)
        }
      })
    })

    setData(arr)
  },[Store.ProductFiltredByCatagory, Store.SelectedBrand])

  return (
    <div className="catalog-wrap">
      <Category_select/>
      <div className="catalog-content-wrap">
        <Filter/>
        <div className="catalog-product-wrap">
          {ndata.map((el:IProdut,index:number)=>
            <Product_card key={index} el={el} index={index}/>
          )}
        </div>

      </div>
    

    </div>
  )
})

export default (Catalog);