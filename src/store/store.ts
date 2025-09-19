
import React from 'react';
import { makeAutoObservable } from 'mobx';
import { data, IProdut } from '@/api/db';
import { IUser } from './IUser';
import { user } from '@/api/user_db';

class store {
  constructor() {
    makeAutoObservable(this);
  }

  user = {} as IUser;    
  setUser(user: IUser) {this.user = user;}

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
            localStorage.setItem('user', JSON.stringify(user));
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
  SetProductFiltredByCatagory(data:Array<IProdut>){
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
        console.log(el)
        console.log(e.target.checked)
        if(e.target.checked){
            arr = [el, ...this.SelectedBrand]
            this.setSelectedBrand(arr)
        } else if(!e.target.checked){
            this.setSelectedBrand(this.SelectedBrand.filter((a)=> a !== el));
        }
    }


  // Computed value example
  /*get doubleCount() {
    return this.count * 2;
  }*/
}

export const Store = new store();