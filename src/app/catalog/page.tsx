'use client'

import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { data, brandList, IProduct } from '@/api/db';
import Product_card  from '@/components/Product_card';
import { Category_select } from "@/app/catalog/category_select";
import { observer } from 'mobx-react-lite';
import './catalog.css'
import Filter from "./filter";
//import { LoginForm } from "@/app/(login)/page";

const Catalog:FC = observer(() => {
  const {Store} = useStore()
  const [ndata, setData] = useState<Array<IProduct>>(data)
  const [sizes, setSizes] = useState<Array<number>>([])
  const [colors, setColors] = useState<Array<number>>([])
  const [brands, setBrands] = useState<Array<string>>([])

  useEffect (()=>{
    /*console.log("111",ndata)*/
    //console.log("111", Store.SelectedBrand)
    const arr:Array<IProduct> = [];
    const sizesArr:Array<number> = [];
    const colorsArray: Array<number> = []
    const brandArr:Array<string> = [];
    Store.ProductFiltredByCatagory.forEach((el:IProduct)=> {
      brandArr.push(brandList[el.brand])
      

      if(Store.SelectedBrand.length > 0) {
        Store.SelectedBrand.forEach((brand:string)=>{
          if(brand===brandList[el.brand]){
            arr.push(el)
            el.sizes?.forEach((size)=> {
              if(typeof size[0] ===  "number"){
                sizesArr.push(size[0])
              }
              if(typeof size[1] ===  "object"){
                size[1].forEach(color => {
                  colorsArray.push(color)
                })    
              };
            }) 
          }
        })
      } else {
        arr.push(el)
        el.sizes?.forEach((size)=> {
          if(typeof size[0] ===  "number"){
            sizesArr.push(size[0])
          }
          if(typeof size[1] ===  "object"){
            size[1].forEach(color => {
              colorsArray.push(color)
            })    
          };
        }) 
      }


    })
    //console.log(sizesArr)

    const clearBrand = [...new Set(brandArr)] 
    setBrands(clearBrand)

    const clearSizes = [...new Set(sizesArr)] 
    setSizes(clearSizes.sort())

    const clearColors = [...new Set(colorsArray)] 
    setColors(clearColors.sort())

    setData(arr)
  },[Store.ProductFiltredByCatagory, Store.SelectedBrand])

  /*useEffect(()=>{
    console.log("111",sizes)
  },[sizes])*/

  return (
    <div className="catalog-wrap">
      <Category_select/>
      <div className="catalog-content-wrap">
        <Filter brands={brands} sizes={sizes} colors={colors}/>
        <div className="catalog-product-wrap">
          {ndata.map((el:IProduct,index:number)=>
            <Product_card key={index} el={el} index={index}/>
          )}
        </div>

      </div>
    

    </div>
  )
})

export default (Catalog);