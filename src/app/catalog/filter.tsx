'use client'

import {FC, useEffect} from "react";
//import { useStore } from "@/store/storeProvidert";
import { brandList} from '@/api/db';
import { observer } from 'mobx-react-lite';
import './catalog.css'
import SelectBrand from "./filter_element/select_brand";
import SelectSize from "./filter_element/select_size";
import SelectColor from "./filter_element/select_color";

//import { LoginForm } from "@/app/(login)/page";

interface Props {
  brands:Array<string>;
  sizes:Array<number>;
  colors:Array<number>;
}

const Filter:FC<Props> = observer (({brands, sizes, colors}) => {
  //const {Store} = useStore()
  

  useEffect (()=>{
   
  },[])

  return (
    <div className="filter-wrap">
      <div className="brand-filter">
        {brands.map((el:string,i:number)=>(
         <SelectBrand key={i} el={el}/>           
        ))}
      </div>
      <div className="size-filter">
        {sizes.map((size:number,i:number)=>(
         <SelectSize key={i} size={size}/>           
        ))}
      </div>
      <div className="colors-filter">
        {colors.map((color:number,i:number)=>(
         <SelectColor key={i} color={color}/>           
        ))}
      </div>
    

    </div>
  )
})

export default (Filter);