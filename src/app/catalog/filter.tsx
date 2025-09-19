'use client'

import {FC, useEffect} from "react";
//import { useStore } from "@/store/storeProvidert";
import { brandList} from '@/api/db';
import { observer } from 'mobx-react-lite';
import './catalog.css'
import SelectBrand from "./filter_element/select_brand";

//import { LoginForm } from "@/app/(login)/page";

const Filter:FC = observer (() => {
  //const {Store} = useStore()
  /*const [ndata, setData] = useState<any>(data)*/

  useEffect (()=>{
    /*console.log("111",ndata)
    setData(Store.ProductFiltredByCatagory)*/
  },[])

  /*const brandSelectHandler = (e: ChangeEvent<HTMLInputElement>) =>{
    console.log(e.target.value)
  }*/

  return (
    <div className="filter-wrap">
      <div className="brand-filter">
        {brandList.map((el:string,i:number)=>(
         <SelectBrand key={i} el={el}/>           
        ))}
      </div>
    

    </div>
  )
})

export default (Filter);