'use client'
import "./profile.css";
import {
  FC, 
  useEffect, 
  //useState 
} from "react";
import { useStore } from "@/store/storeProvidert";
//import { data, IProduct } from '@/api/db';
import { observer } from 'mobx-react-lite';
//import Product_card  from '@/components/Product_card';

const Profile:FC = observer(() => {
  const {Store} = useStore();
  //const [cartList, setCartList] = useState<Array<IProduct>>([])
 
  useEffect(()=>{
      /*const tempArr:Array<IProduct> = []
      Store.user.cart.forEach((id)=>{
        const el = data.find((el)=> el.id===id)
        if(el){tempArr.push(el)}
      })
      console.log(tempArr)
      setCartList(tempArr)*/
  },[Store.user.fav])

  return (
    <div className="fav-wrap container">
      <h1>Личный кабинет</h1>
      <div className="fav-product-wrap">
          {/*cartList.map((el:IProduct,index:number)=>
            <div key={index} data-el={el} data-index={index}></div>
          )*/}
      </div>
        
    </div>
  )
});

export default (Profile);
