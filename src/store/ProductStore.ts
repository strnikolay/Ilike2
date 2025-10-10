
import React from 'react';
import { makeAutoObservable } from 'mobx';
import { mockdata} from '@/api/db';
import {IProduct} from "@/store/interfaces"
//import { userMock } from '@/api/user_db';

class productstore {
  constructor() {
    makeAutoObservable(this);
  }

  selectedCategory: number|undefined = undefined
  setSelectedCategory(cat:number|undefined){this.selectedCategory = cat}

  ProductFiltredByCategory:IProduct[] = mockdata 
  SetProductFiltredByCategory(data:Array<IProduct>){
    this.ProductFiltredByCategory = data
  }
  FiltredByCategory (param:number|undefined) {
    if(param !== undefined){
      this.SetProductFiltredByCategory(mockdata.filter((el)=>el.cat === param))   
    } else {
      this.SetProductFiltredByCategory(mockdata)
    }
    this.setSelectedCategory(param) 
  }





  get brandsList () {
    const tempBrandArr:number[] = []

    this.ProductFiltredByCategory.forEach((el)=>{
      tempBrandArr.push(el.brand)
    })
    const clearBrand = [...new Set(tempBrandArr)] 
    return clearBrand
  }

  SelectedBrand:number[] = []
  setSelectedBrand(arr: number[]){ this.SelectedBrand = arr}

  brandSelectHandler = (
    e:React.ChangeEvent<HTMLInputElement>, 
    brand:number
  ) => {
        let arr = []
        if(e.target.checked){
            arr = [brand, ...this.SelectedBrand]
            this.setSelectedBrand(arr)
        } else if(!e.target.checked){
            this.setSelectedBrand(this.SelectedBrand.filter((a)=> a !== brand));
        }
  }

  ProductFiltredByBrand:IProduct[] = this.ProductFiltredByCategory 
  SetProductFiltredByBrand(data:IProduct[]){
    this.ProductFiltredByBrand = data
  }

  FiltredByBrand (param:number[]) {
    if(param.length>0){
      const templist:IProduct[] = [] 
      this.ProductFiltredByCategory.forEach((el)=> {
        param.forEach((par)=> {
          if(el.brand === par){
            templist.push(el)
          }
        })
      })
      //console.log(templist)
      this.SetProductFiltredByBrand(templist)
    } else {
      this.SetProductFiltredByBrand(this.ProductFiltredByCategory)
    }
  }

  


  get sizesList () {
    const tempSizesArr:number[] = []

    this.ProductFiltredByBrand.forEach((el)=>{
      el.sizes?.forEach((sizes)=>{
        //console.log(size)
        tempSizesArr.push(sizes.size)
      })
    })
    const clearSize = [...new Set(tempSizesArr)] 
    return clearSize
  }

  SelectedSizes:number[] = []
  setSelectedSizes(arr: Array<number>){ this.SelectedSizes = arr}

  sizeSelectHandler = (
    e:React.ChangeEvent<HTMLInputElement>, 
    el:number
  ) => {
        let arr = []
        if(e.target.checked){
            arr = [el, ...this.SelectedSizes]
            this.setSelectedSizes(arr)
        } else if(!e.target.checked){
            this.setSelectedSizes(this.SelectedSizes.filter((a)=> a !== el));
        }
  }

  productFiltredBySizes:IProduct[] = this.ProductFiltredByBrand 
  SetProductFiltredBySizes(data:IProduct[]){
    this.productFiltredBySizes = data
  }

  FiltredBySizes (param:number[]) {
    if(param.length>0){
      const templist:IProduct[] = [] 
      this.ProductFiltredByBrand.forEach((el)=> {
        param.forEach((par)=> {
          el.sizes.forEach((sizes)=>{
            if(sizes.size === par){
              templist.push(el)
            }
          })
          
        })
      })
      //console.log(templist)
      this.SetProductFiltredBySizes(templist)
    } else {
      this.SetProductFiltredBySizes(this.ProductFiltredByBrand)
    }
  }

  get colorsList () {
    const tempColorsArr:number[] = []
    this.productFiltredBySizes.forEach((el)=>{
      el.sizes?.forEach((sizes)=>{
        sizes.colors.forEach((color)=>{
          tempColorsArr.push(color)
        })
      })
    })
    const clearSize = [...new Set(tempColorsArr)] 
    return clearSize
  }

  SelectedColors:number[] = []
  setSelectedColors(arr: Array<number>){ this.SelectedColors = arr}

  colorsSelectHandler = (
    e:React.ChangeEvent<HTMLInputElement>, 
    el:number
  ) => {
        let arr = []
        if(e.target.checked){
            arr = [el, ...this.SelectedSizes]
            this.setSelectedColors(arr)
        } else if(!e.target.checked){
            this.setSelectedColors(this.SelectedSizes.filter((a)=> a !== el));
        }
  }

  productFiltredByColors:IProduct[] = this.productFiltredBySizes 
  SetProductFiltredByColors(data:IProduct[]){
    this.productFiltredByColors = data
  }


  FiltredByColors (param:number[]) {
    if(param.length>0){
      const templist:IProduct[] = [] 
      this.productFiltredBySizes.forEach((el)=> {
        param.forEach((par)=> {
          el.sizes.forEach((sizes)=>{
            sizes.colors.forEach((color)=>{
              if(color === par){
                templist.push(el)
              }
            })
            
          })
          
        })
      })
      //console.log(templist)
      this.SetProductFiltredByColors(templist)
    } else {
      this.SetProductFiltredByColors(this.productFiltredBySizes)
    }
  }





}

export const Product_Store = new productstore();