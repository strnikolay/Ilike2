'use client'

import React, { useEffect } from 'react';
import "./Login_form.css";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';
import LoginForm from './Login_form';



export const Popup = observer (() => {
	const {Store, Cart_Store} = useStore()

	useEffect (()=>{
		const auth =localStorage.getItem('user')
		if(auth){
			Store.setAuth(true)
			const newuser = JSON.parse(auth)
			Store.setUser(newuser)
			Cart_Store.CalcSummOfProductInCart()
		}
	})

	return (
		<>
			{Store.popup==="Login"&&<LoginForm/>}
		</>
  	);
});
