'use client'

import React, { useEffect } from 'react';
import "./Login_form.css";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react-lite';
import LoginForm from './Login_form';



export const Popup = observer (() => {
	const {Store} = useStore()

	useEffect (()=>{
		const auth =localStorage.getItem('user')
		if(auth){Store.setAuth(true)}
	})

	return (
		<>
			{Store.popup==="Login"&&<LoginForm/>}
		</>
  	);
});
