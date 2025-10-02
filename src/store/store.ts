
import React from 'react';
import { makeAutoObservable } from 'mobx';
import { data, IProduct } from '@/api/db';
import { IcartItemParam, IUser } from './IUser';
import { userMock } from '@/api/user_db';

class store {
  constructor() {
    makeAutoObservable(this);
  }

  user = {} as IUser;    
  setUser(newuser: IUser) {this.user = newuser;}

  isLoginOpen = true; 
  setIsLoginOpen(bool: boolean) {this.isLoginOpen = bool}

  isAuth = false;
  setAuth(bool: boolean) {this.isAuth = bool;}

  async login() {
        try {
            //const response = await axios_Service.login(email, password);
            //console.log('response')
            //localStorage.setItem('user', response.data.accessToken);
            /*localStorage.setItem('refreshtoken', response.data.refreshToken);
            localStorage.setItem('clientId', response.data.user.id);
            this.setUser(response.data.user);*/
            localStorage.setItem('user', JSON.stringify(userMock));
            this.setAuth(true);
            this.SetPopup("")
        } catch {
            /*console.log(e.response?.data?.message);*/
        }
  }

  async logout() {
        try {
            localStorage.removeItem('user');
            this.setAuth(false);
        } catch  {
            /*console.log(e.response?.data?.message);*/
        }
  }

  ProductFiltredByCatagory:Array<IProduct> = data
  
  SetProductFiltredByCatagory(data:Array<IProduct>){
    this.ProductFiltredByCatagory = data
  }

  Filtred (param:number|null) {
    if(param){
      this.SetProductFiltredByCatagory(data.filter((el)=> el.cat === param))
    } else {
      this.SetProductFiltredByCatagory(data)
    }
    
  }

  popup = "";
  SetPopup(name:string){this.popup = name} 


  SelectedBrand:Array<string> = []
  setSelectedBrand(arr: Array<string>){ this.SelectedBrand = arr}

  brandSelectHandler = (
    e:React.ChangeEvent<HTMLInputElement>, 
    el:string
  ) => {
        let arr = []
        if(e.target.checked){
            arr = [el, ...this.SelectedBrand]
            this.setSelectedBrand(arr)
        } else if(!e.target.checked){
            this.setSelectedBrand(this.SelectedBrand.filter((a)=> a !== el));
        }
  }



  SelectedSize:Array<number> = []
  setSelectedSize(arr: Array<number>){ this.SelectedSize = arr}

  sizeSelectHandler = (
    e:React.ChangeEvent<HTMLInputElement>, 
    el:number
  ) => {
        let arr = []
        if(e.target.checked){
            arr = [el, ...this.SelectedSize]
            this.setSelectedSize(arr)
        } else if(!e.target.checked){
            this.setSelectedSize(this.SelectedSize.filter((a)=> a !== el));
        }
  }

  SelectedColor:Array<number> = []
  setSelectedColor(arr: Array<number>){ this.SelectedSize = arr}

  colorSelectHandler = (
    e:React.ChangeEvent<HTMLInputElement>, 
    el:number
  ) => {
        let arr = []
        if(e.target.checked){
            arr = [el, ...this.SelectedSize]
            this.setSelectedColor(arr)
        } else if(!e.target.checked){
            this.setSelectedColor(this.SelectedSize.filter((a)=> a !== el));
        }
  }

  addToFav (ProductId:string) {
    const tempUser = this.user
    tempUser.fav.push(ProductId)
    this.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }
  
  removeFav (ProductId:string) {
    const tempUser = this.user
    //console.log(tempUser.fav)
    tempUser.fav = tempUser.fav.filter((el) => el !== ProductId)
    //console.log(tempUser)
    this.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }

  addToCart (ProductId:string) {
    const tempUser = this.user
    const cartItem = {
      id:ProductId,
      params: []
    }
    tempUser.cart.push(cartItem)
    this.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }

  removeFromCart (ProductId:string) {
    const tempUser = this.user
    //console.log(tempUser.fav)
    tempUser.cart = tempUser.cart.filter((el) => el.id !== ProductId)
    //console.log(tempUser)
    this.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }

  addItemParamsToDB (itemIndex:number, params:IcartItemParam) {
    const tempUser=this.user
    console.log(params)
    //console.log(itemIndex)
    //console.log("до", tempUser.cart[itemIndex])
    tempUser.cart[itemIndex].params.push(params)
    //console.log("после", tempUser.cart[itemIndex])
    //this.setUser(tempUser)
    //localStorage.setItem("user", JSON.stringify(tempUser))
  }

  updateParamsInDB (itemIndex:number, params:IcartItemParam, index:number){
    const tempUser=this.user
    tempUser.cart[itemIndex].params.splice(index, 1, params)
    this.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }

  deleteParamsInCartItem (itemIndex:number, index:number) {
    const tempUser=this.user
    tempUser.cart[itemIndex].params.splice(index, 1)
    this.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }

  // Computed value example
  /*get doubleCount() {
    return this.count * 2;
  }*/
}

export const Store = new store();