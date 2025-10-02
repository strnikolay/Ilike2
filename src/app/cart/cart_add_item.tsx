'use client'
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { data, IProduct, brandList, categoryList, ColorName, ColorRGB } from '@/api/db';
import { observer } from 'mobx-react-lite';
import { IcartItemParam } from "@/store/IUser";
//import Product_card  from '@/components/Product_card';

interface Props {
  item:IProduct;
  params: IcartItemParam;
  itemIndex:number;
  index:number;
}

const Add_item:FC<Props> = observer(({item, params={size:0, color:0, count:0}, itemIndex, index}) => {
  const {Store} = useStore();
  const [sizeList, setSizeList] = useState<Array<number>>([]);
  const [selectedSize, setSelectedSize] = useState<number>(params.size);
  const [isSizeSelected, setIsSizeSelected] = useState(true);
  const [colorList, setColorList] = useState<any>([]);
  const [isCountDissable, setIsCountDissable] = useState(true);
  const [selectedColor, setSelectedColor] = useState<number>(params.color);
  const [Count, setCount] = useState<number>(params.count);

 
  useEffect(()=>{

    const tempArr:Array<number> = []
    item.sizes?.forEach((el) => {
      if(typeof el[0] === "number"){tempArr.push(el[0])}
    })
    setSizeList(tempArr)


  },[])

  useEffect(()=>{
    if(typeof selectedSize === "number") setIsSizeSelected(false)
    if(item.sizes){
      const tempClolorList = item.sizes.find((el)=> el[0] === selectedSize)
      if(tempClolorList)setColorList(tempClolorList[1])  
    }
  },[selectedSize])

  useEffect(()=>{
    const params = {"size":selectedSize, "color":selectedColor, "count":Count}
    //console.log("useEf",itemIndex)
    //if(!isSizeSelected&&!isCountDissable){
    Store.updateParamsInDB(itemIndex, params, index)
    //}
  },[Count, selectedColor, selectedSize])



  const selectSizeHandler = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setSelectedSize(Number(e.target.value))
  }

  const selectColorHandler = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setSelectedColor(Number(e.target.value))
    setIsCountDissable(false)
  }

  const setCountHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setCount(Number(e.target.value))
  }

  return (
      <div className="select-item">
        <div className="select-size-wrap">
          размер:
          <select onChange={selectSizeHandler}>
            <option value="">{selectedSize===0?"---":selectedSize}</option>
            {sizeList.map((size:number,i:number)=>(
               <option key={i} value={size}>{size}</option>           
            ))}
          </select>
        </div>
        <div className="select-color-wrap" data-active={selectedSize===0?"disabled":"active"}>
          цвет:
          <select className="select-color" onChange={selectColorHandler} disabled={selectedSize===0}>
              <option value="">{selectedColor===0?"---":ColorName[selectedColor]}</option>
              {colorList.map((color:number,i:number)=>( 
                <option key={i} className="option" value={color}>
                  {ColorName[color]}
                </option>          
              )) }
          </select>
        </div>
        <div className="count-wrap" data-active={selectedColor===0?"disabled":"active"}>
          количество:
          <label className="increment"> 
            <input type="button" onClick={() => setCount(Count+1)} disabled={isCountDissable}/>
            +
          </label>
          <label htmlFor="count" className="count-label">
            <input id="count" value={Count} type="number" min={1} max={item.count} onChange={setCountHandler} disabled={isCountDissable} />
          </label>
          <label className="decrement"> 
            <input type="button" onClick={() => setCount(Count-1)}  disabled={isCountDissable}/>
            -
          </label>
        </div>
        <div>
          Сумма: {item.price*Count!}
        </div>
        <button className="item-delete" onClick={() => Store.deleteParamsInCartItem(itemIndex, index)}>
            X
        </button>

      </div>         
  )
});

export default (Add_item);
