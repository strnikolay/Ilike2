
import React from 'react';
import { makeAutoObservable } from 'mobx';
import { mockdata} from '@/api/db';
import { userMock } from '@/api/user_db';
import {IProduct, IcartItemParam, IUser} from "@/store/interfaces"

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

  popup = "";
  SetPopup(name:string){this.popup = name} 

  addToFav (ProductId:string) {
    const tempUser = this.user
    tempUser.fav.push(ProductId)
    this.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }
  
  removeFav (ProductId:string) {
    const tempUser = this.user
    tempUser.fav = tempUser.fav.filter((el) => el !== ProductId)
    this.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }
}

export const Store = new store();