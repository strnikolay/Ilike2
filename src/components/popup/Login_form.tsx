'use client'

import React from 'react';
import "./Login_form.css";
import Image from 'next/image';
/*import { useRouter } from 'next/navigation'*/
import { useStore } from "@/store/storeProvidert";
import Link from 'next/link';
//import { observer } from 'mobx-react-lite';

export default function LoginForm () {
	const {Store} = useStore()	


	return (
	<div className="login-wrapper">
		<div className='background' onClick={() => Store.SetPopup('')}></div>
		<div className="divshadow bounceIn">
			<button onClick={() => Store.SetPopup('')} className="close" />
			
			<h3><i/>Войти / Зарегистрироваться <i/></h3>
				 
			<div className="text">
					<div className='text-icon'>
						<Image src="/login/loginicon.png" fill alt="" title=""/>
					</div>

					<div>
						Войдите в личный кабинет, используя логин и пароль, указанный во время регистрации, или зарегистрируйтесь, если вы новый клиент.
					</div>
			</div>


			<form action="https://ilikeopt.ru/login/" method="post" encType="multipart/form-data">
					<div className="form-group">

						<div className="input-group">
							<div className="user"></div>
							<input type="text" name="email" placeholder="Логин или e-mail" defaultValue=""	className="form-control"/>
						</div>

						<div className="input-group">
							<div className="pass"></div>
							<input type="password" name="password" placeholder="Пароль" defaultValue="" className="form-control"/>
						</div>

						<div className="input-group button-wrap">
							<div className="">
								<input type="button" defaultValue="Войти" className="btn-submit" onClick={()=>Store.login()}/>
							</div>
							<div className="">
								<Link className="text-underline" href="/#">
									Забыли пароль?
								</Link>
							</div>
						</div>
					</div>
			</form>
			<div className="form-footer">
					<Link href="/#" className="plus_btn">
					</Link>
					
					<Link className="text-underline" href="/#">
						Зарегистрироваться 
					</Link>
					<p> и стать клиентом нашего	магазина</p>	
			</div>
		</div>
	</div>
  );
};
