'use client'

import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react-lite';
import { ColorName, ColorRGB } from "@/api/db";

interface Props {
  color:number;
}

const SelectColor:FC<Props> = observer (({color}) => {
  const {Store} = useStore()
  const [selected, setSelected] = useState(false)

  useEffect (()=>{
    Store.SelectedColor.forEach((el) =>{
      if(color === el){
        setSelected(true)
      } 
    })

    

  },[Store])

  return (
    <div className="input-wrap">  
      <input  id={JSON.stringify(color)} value={color} type="checkbox" onChange={(e) => Store.colorSelectHandler(e, color)}/>
      <label htmlFor={JSON.stringify(color)} className='select-brand' >
        <div className={`color-item color`+color}></div>
        {ColorName[color]}
      </label>
     </div>                 
  )
})

export default (SelectColor);