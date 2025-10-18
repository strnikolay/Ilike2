'use client'
import {FC, useEffect } from "react";
//import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';


interface Props {
  type:string;
  //itemIndex: number;
}

export const Select_Transport:FC<Props> = observer(({type}) => {
  //const {Store, Cart_Store} = useStore();
  //const [itemParams, setItemParams] = useState<IcartItemParam[]>([]);
  
 
  /*useEffect(()=>{
    
  },[])*/

 

  return (
     <label className={`btn `+type}>
          <input
            //onChange={()=>setSelectedReceipt("delivery")}
            //checked={selectedReceipt==="delivery"}
            name='delyvery-type'
            type="radio"
            className=""
          />
    </label>

  )
});
