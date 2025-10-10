

import { makeAutoObservable } from 'mobx';

import {IcartItemParam} from "@/store/interfaces"
import { Store } from './store';

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

  updateParamsInDB (itemIndex:number, params:IcartItemParam, paramsIndex:number){
    //console.log(params)
    const tempUser=Store.user
    tempUser.cart[itemIndex].params.splice(paramsIndex, 1, params)
    Store.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }

  deleteParamsInCartItem (itemIndex:number, paramsIndex:number) {
    const tempUser=Store.user
    tempUser.cart[itemIndex].params.splice(paramsIndex, 1)
    Store.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }

}

export const Cart_Store = new cartStore();