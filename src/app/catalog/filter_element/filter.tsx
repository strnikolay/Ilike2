'use client'

import {FC, useEffect, useState} from "react";
import { useStore } from "@/store/storeProvidert";
//import { brandList} from '@/api/db';
import { observer } from 'mobx-react';
import '../catalog.css'
import SelectBrand from "./select_brand";
import SelectSize from "./select_size";
import SelectColor from "./select_color";


//import { LoginForm } from "@/app/(login)/page";

interface Props {
  sizes:Array<number>;
  colors:Array<number>;
 }

const Filter:FC<Props> = observer (({sizes, colors}) => {
  const {Product_Store} = useStore()
  const [brandsList, setBrandsList] = useState<Array<number>>([])
  const [sizesList, setSizesList] = useState<Array<number>>([])
  const [colorsList, setColorsList] = useState<Array<number>>([])
  

  useEffect (()=>{
    setBrandsList(Product_Store.brandsList)
  },[Product_Store.SelectedBrand])

  useEffect (()=>{
    setSizesList(Product_Store.sizesList)
  },[Product_Store.SelectedSizes])

  useEffect (()=>{
    setColorsList(Product_Store.colorsList)
  },[Product_Store.SelectedColors])

  return (
    <div className="filter-wrap">
      <div className="brand-filter">
        {brandsList.map((brand:number,i:number)=>(
         <SelectBrand key={i} brand={brand} index={i}/>           
        ))}
      </div>
      <div className="size-filter">
        {sizesList.map((size:number,i:number)=>(
         <SelectSize key={i} size={size}/>           
        ))}
      </div>
      <div className="colors-filter">
        {colorsList.map((color:number,i:number)=>(
         <SelectColor key={i} color={color}/>           
        ))}
      </div>
    

    </div>
  )
})

export default (Filter);