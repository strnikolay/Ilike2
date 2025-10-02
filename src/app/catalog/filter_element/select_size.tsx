'use client'

import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react-lite';

interface Props {
    size:number;
}

const SelectSize:FC<Props> = observer (({size}) => {
  const {Store} = useStore()
  const [selected, setSelected] = useState(false)

  useEffect (()=>{
    Store.SelectedSize.forEach((el) =>{
      if(size === el){
        setSelected(true)
      } 
    })

  },[Store])

  return (
    <div className="input-wrap">  
      <input  id={JSON.stringify(size)} value={size} type="checkbox" onChange={(e) => Store.sizeSelectHandler(e, size)}/>
      <label htmlFor={JSON.stringify(size)} className='select-brand' >{size}</label>
     </div>                 
  )
})

export default (SelectSize);