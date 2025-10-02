'use client'

import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react-lite';

interface Props {
    el:string;
    key:number;
}

const SelectBrand:FC<Props> = observer (({el,}) => {
  const {Store} = useStore()
  const [selected, setSelected] = useState(false)

  useEffect (()=>{
    /*console.log("111",Store.SelectedBrand)*/
    if(Store.SelectedBrand.includes(el)){
      //console.log(el, true)
      setSelected(true)
    } 
    //console.log(selected)
    /*setData(Store.ProductFiltredByCatagory)*/
  },[Store])

  return (
    <div className="input-wrap">  
    <input  id={el} value={el} type="checkbox" onChange={(e) => Store.brandSelectHandler(e, el)}/>
    <label htmlFor={el} className='select-brand' >{el}</label>
     </div>                 
  )
})

export default (SelectBrand);