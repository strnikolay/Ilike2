

import { makeAutoObservable } from 'mobx';

import {IcartItem, IcartItemParam} from "@/store/interfaces"
import { Store } from './store';
import { mockdata } from '@/api/db';

class cartStore {
  constructor() {
    makeAutoObservable(this);
  }

  addToCart (ProductId:string) {
    const tempUser = Store.user
    const cartItem = {
      id:ProductId,
      params: []
    }
    tempUser.cart.push(cartItem)
    Store.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }

  removeFromCart (ProductId:string) {
    const tempUser = Store.user
    tempUser.cart = tempUser.cart.filter((el) => el.id !== ProductId)
    Store.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }

  addNewParamsToProductInCart (itemIndex:number) {
    const tempUser=Store.user
    //console.log(itemIndex)
    //console.log("до", tempUser.cart[itemIndex])
    const params = {size:undefined, color:undefined, count:0}
    tempUser.cart[itemIndex].params.push(params)
    //console.log("после", tempUser.cart[itemIndex])
    Store.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }


  isParamsUpdate = false;
  setIsParamsUpdate(bool: boolean) {this.isParamsUpdate = bool;}

  updateParamsInDB (itemIndex:number, params:IcartItemParam, paramsIndex:number){
    //console.log(params)
    const tempUser=Store.user
    tempUser.cart[itemIndex].params.splice(paramsIndex, 1, params)
    Store.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
    this.setIsParamsUpdate(true)
  }

  deleteParamsInCartItem (itemIndex:number, paramsIndex:number) {
    const tempUser=Store.user
    tempUser.cart[itemIndex].params.splice(paramsIndex, 1)
    Store.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }

  summInCart:number = 0;
  setSummInCart(summ: number) {this.summInCart = summ;}

  CalcSummOfProductInCart () {
    let tempSumm:number = 0
    Store.user.cart.forEach((product:IcartItem)=>{
      if(product){
        const productCost = mockdata.find((el)=>el.id === product.id)?.price
        let productcount = 0
        product.params.forEach((params:IcartItemParam)=>{
          productcount = productcount + params.count
        })
        tempSumm = tempSumm + (productCost! * productcount)
      }
    })
    //console.log(tempSumm)
    this.setSummInCart(tempSumm)
  }

  isOrderStage = false;
  setIsOrderStage(bool: boolean) {this.isOrderStage = bool;}

}

export const Cart_Store = new cartStore();