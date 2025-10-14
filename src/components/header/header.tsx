'use client'
import React from 'react';
import Image from 'next/image';
import "./header.css";
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';

export const Header: React.FC = observer(() => {
	const router = useRouter();
	const {Store, Cart_Store} = useStore();
	const [dropdown, setDropdown] = React.useState(false)
	//const [mobilemenu, setMobilemenu] = React.useState(false)

  	return (
  	<div className="header">
		<div className="container">		
			<Link className='logo' href={'/'} />

            <input className="search" type="text" defaultValue="" placeholder="Поиск товара по каталогу"/>


			<div className='header-btn-wrap'>
					
				<div className="contact-wrapper">
					<div className="phone-icon">
						<Image src="/header/fone-icon.svg" alt="iLikeOpt.ru" fill priority={false}/>
					</div>

					<div className="contact-content">	

						<div className="phone-number" onClick={() => setDropdown(!dropdown)}>
							+7 (925) 518-77-67
							<div className="grey-arrow-down" />
						</div>

						{dropdown&&<div className="dropdown-menu">
							<div>
								<div className='img-wrap'>
									<Image src="/megafon.png" fill alt=""/>
								</div>
								<span>+7(925) 518-77-67 -	АйЛайк</span>
							</div>
							<div>
								<div className='img-wrap'>
									<Image src="/megafon.png" fill alt=""/>
								</div>
								<span>+7(926) 775-96-22 - Федор	Власов, куратор отдела продаж</span>
							</div>
							<div>
								<div className='img-wrap'>
									<Image src="/telefon.png" fill alt=""/>
								</div>
								<span className="dropdown-phones">+7(925) 090-00-10</span>
							</div>
							<div>
								<div className='img-wrap'>
									<Image src="/telefon.png" fill alt=""/>
								</div>
								<span className="dropdown-phones">+7(925) 090-33-38</span>
							</div>
							<div>
								<div className='img-wrap'>
									<Image src="/telefon.png" fill alt=""/>
								</div>
								<span className="dropdown-phones">+7(495) 518-77-67</span>
							</div>
							... или
							<div>
								<Link href={'/#'} className="btn openrecall">Закажите	обратный звонок</Link>
							</div>
						</div>}

						<a className="openrecall">
							Заказать обратный звонок
						</a>


					</div>
				</div>

				{Store.isAuth?
					<Link href="/cart" className='cart-btn-wrap'>
						<Image src="/header/cart-svg.svg" alt="iLikeOpt.ru" fill priority={false}/>
						<div className='header-cart-sum'>{Cart_Store.summInCart}</div>
					</Link>
					:null
				}
			
			</div>	

		</div>



		<div className="container">
			<button onClick={() => router.push('/catalog')} className="category" type="button">
				<span className="category-text">КАТАЛОГ</span>
            	<div className="burger"></div>
			</button>


			<nav>
				<ul className='nav-list'>
					<li data-id="0" className="hasdropdown">
						<Link href="/about">О нас <i className="fa fa-chevron-down"></i></Link>
						<ul className='dropdown-list'>
							<li data-id="1"><Link href="/certificates">Сертификаты</Link></li>
							<li data-id="1"><Link href="/#">Политика Конфиденциальности</Link></li>
							<li data-id="1"><Link href="/#">Новости</Link></li>
							<li data-id="1"><Link href="/#">Отзывы</Link></li>
						</ul>
					</li>
					<li data-id="1"><Link href="/partner">Сотрудничество</Link></li>
					<li data-id="2"><Link href="/delivery">Доставка</Link></li>
					<li data-id="3"><Link href="/contact">Контакты</Link></li>
					<li data-id="4">
						<Link href="/info">
							Информация <i className="fa-chevron-down"/>
						</Link>
					</li>	
				</ul>
				{Store.isAuth?						    
					<div className='nav-btn'>
						<Link className='fav-link' href="/favourites"/>
					</div>:null
				}
			</nav>

			{Store.isAuth?
			<div className='login-wrap'>
				<button onClick={() => Store.logout()} className="logout">
					<Image src="/header/logout-svg.svg" title="iLikeOpt.ru" alt="iLikeOpt.ru" fill/>
				</button>
				<button onClick={() => router.push('/profile')} className="profile">
					Личный кабинет
				</button>
				<button 
					//onClick={() => setMobilemenu(true)} 
					className="burger-menu"
				>
					<Image src="/burger.svg" title="iLikeOpt.ru" alt="iLikeOpt.ru" fill/>
				</button>

			</div>:
			<div className='login-wrap'>
				<button onClick={() => Store.SetPopup('Login')} className="login">
					Войти/Зарегистрироваться
				</button>
				<button 
					//onClick={() => setMobilemenu(true)} 
					className="burger-menu"
				>
				</button>
			</div>}	
			
				
		</div>
	</div>
  );
});
