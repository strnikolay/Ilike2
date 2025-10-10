'use client'

import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { mockdata} from '@/api/db';
import {IProduct} from "@/store/interfaces"
import Product_card  from '@/components/product/Product_card';
import { Category_select } from "@/app/catalog/category_select";
import { observer } from 'mobx-react';
import './catalog.css'
import Filter from "./filter_element/filter";
//import { LoginForm } from "@/app/(login)/page";

const Catalog:FC = observer(() => {
  const {Product_Store} = useStore()
  
  
  
  const [sizes, setSizes] = useState<Array<number>>([])
  const [colors, setColors] = useState<Array<number>>([])



  /*useEffect(()=>{
    setproductList(Product_Store.productList)
  },[Product_Store.productList])*/

  


  useEffect(()=>{
    Product_Store.FiltredByCategory(Product_Store.selectedCategory)
    Product_Store.setSelectedBrand([])
  },[Product_Store.selectedCategory])

  useEffect(()=>{
    Product_Store.FiltredByBrand(Product_Store.SelectedBrand)
  },[Product_Store.SelectedBrand])

  useEffect(()=>{
    Product_Store.FiltredBySizes(Product_Store.SelectedSizes)
  },[Product_Store.SelectedSizes])

  return (
    <div className="catalog-wrap">
      <Category_select/>
      <div className="catalog-content-wrap">
        <Filter sizes={sizes} colors={colors}/>
        <div className="catalog-product-wrap">
          {Product_Store.productFiltredBySizes.map((el:IProduct,index:number)=>
            <Product_card key={index} el={el} index={index}/>
          )}
        </div>

      </div>
    

    </div>
  )
})

export default (Catalog);