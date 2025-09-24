
import React from 'react';
import { makeAutoObservable } from 'mobx';
import { data, IProduct } from '@/api/db';
import { IUser } from './IUser';
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

  ProductFiltredByCatagory = data
  SetProductFiltredByCatagory(data:Array<IProduct>){
    this.ProductFiltredByCatagory = data
  } 

  Filtred (param:number) {
    this.SetProductFiltredByCatagory(data.filter((el)=> el.cat === param))
  }

  popup = "";
  SetPopup(name:string){this.popup = name} 


  SelectedBrand:Array<string> = []
  setSelectedBrand(arr: Array<string>){ this.SelectedBrand = arr}

  brandSelectHandler = (e:React.ChangeEvent<HTMLInputElement>, el:string) => {
        let arr = []
        //console.log(this.tempMortgage)
        //console.log(el)
        //console.log(e.target.checked)
        if(e.target.checked){
            arr = [el, ...this.SelectedBrand]
            this.setSelectedBrand(arr)
        } else if(!e.target.checked){
            this.setSelectedBrand(this.SelectedBrand.filter((a)=> a !== el));
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
    tempUser.cart.push(ProductId)
    this.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }

  removeFromCart (ProductId:string) {
    const tempUser = this.user
    //console.log(tempUser.fav)
    tempUser.cart = tempUser.cart.filter((el) => el !== ProductId)
    //console.log(tempUser)
    this.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }

  // Computed value example
  /*get doubleCount() {
    return this.count * 2;
  }*/
}

export const Store = new store();