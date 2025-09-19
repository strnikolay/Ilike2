'use client'
import React from 'react';
import Image from 'next/image';
import "./header.css";
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react-lite';

export const Header: React.FC = observer(() => {
	const router = useRouter();
	const {Store} = useStore();
	const [dropdown, setDropdown] = React.useState(false)

  	return (
  	<div className="header">
		<div className="container">		
			<Link className='logo' href={'/'}>
				
			</Link>

            <input type="text" defaultValue="" placeholder="Поиск товара по каталогу" className="search" />                


											
			<div className="contact-wrapper">
               	<div className="phone-icon"></div>

				<div className="contact-content">	

					<div className="phone-number" onClick={() => setDropdown(!dropdown)}>
						+7 (925) 518-77-67<div className="grey-arrow-down"></div>
					</div>

					{dropdown&&<div className="dropdown-menu">
						<p>
							<Image src="/megafon.png" alt=""/>
							<span>+7(925) 518-77-67 -	АйЛайк</span>
						</p>
						<p>
							<Image src="/megafon.png" alt=""/>
							<span>+7(926) 775-96-22 - Федор	Власов, куратор отдела продаж</span>
						</p>
						<p>
							<Image src="/telefon.png" alt=""/>
							<span className="dropdown-phones">+7(925) 090-00-10</span>
						</p>
						<p>
							<Image src="/telefon.png" alt=""/>
							<span className="dropdown-phones">+7(925) 090-33-38</span>
						</p>
						<p>
							<Image src="/telefon.png" alt=""/>
							<span className="dropdown-phones">+7(495) 518-77-67</span>
						</p>
						... или
						<p>
							<Link href={'/#'} className="btn openrecall">Закажите	обратный звонок</Link>
						</p>
					</div>}

					<a className="openrecall">
					    Заказать обратный звонок
					</a>


				</div>
			</div>


			{Store.isAuth?<div className='cart-wrap'>
				<Image className='' src="/header/cart-svg.svg" alt="iLikeOpt.ru" width={60} height={50} priority={false}/> 
			</div>:null}
			{/*<div className="col-lg-1 col-md-2 col-sm-2 hidden-xs">
				<div id="cart" className="btn-group btn-block text-right">
						<a href="https://ilikeopt.ru/cart/" data-loading-text="Загрузка..." className="btn btn-inverse">
		                    <i className="fa fa-shopping-cart">
                        		<span id="cart-total">
                          			17 600 р
                        			<div className="cart-discount-info">
										<div className="">Текущая скидка: 0%</div>
										<div className="">До следующей скидки (2%): 12 400.00 р.</div>
									</div>
                        		</span>
                      		</i>
						</a>
				</div>
			</div>*/}

		</div>



		<div className="container">
			<button onClick={() => router.push('/catalog')} className="category" type="button">
				<span className="category-text">КАТАЛОГ</span>
            	<div className="burger"></div>
			</button>


			<nav>
				<ul>
					<li data-id="0" className="hasdropdown">
						<Link href="/about">О нас <i className="fa fa-chevron-down"></i></Link>
						<ul>
							<li data-id="1"><Link href="/#">Сертификаты</Link></li>
							<li data-id="1"><Link href="/#">Политика Конфиденциальности</Link></li>
							<li data-id="1"><Link href="/#">Новости</Link></li>
							<li data-id="1"><Link href="/#">Отзывы</Link></li>
						</ul>
					</li>
					<li data-id="1"><Link href="/partner">Сотрудничество</Link></li>
					<li data-id="2"><Link	href="/delivery">Доставка</Link></li>
					<li data-id="3"><Link	href="/contact">Контакты</Link></li>
					<li data-id="4"><Link	href="https://ilikeopt.ru/razmernaja-tablica">Информация <i className="fa fa-chevron-down"></i></Link></li>							    
					<li data-id="7">
						<Link className="btn btn-primary btn-lg btn__price"
													href="https://ilikeopt.ru/price-list/">Прайс-лист</Link>
											</li>
				</ul>
			</nav>

			{Store.isAuth?
			<div className='login-wrap'>
				<button onClick={() => Store.logout()} className="logout">
					<Image src="/header/logout-svg.svg" title="iLikeOpt.ru" alt="iLikeOpt.ru" width={25} height={25}/>
				</button>
				<button onClick={() => Store.SetPopup('Login')} className="profile">
					Личный кабинет
				</button>
			</div>:
			<div className='login-wrap'>
				<button onClick={() => Store.SetPopup('Login')} className="login">
					Войти/Зарегистрироваться
				</button>
			</div>}	
			
				
		</div>
	</div>
  );
});
