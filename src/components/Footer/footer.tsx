import React from 'react';
import Image from 'next/image';
import "./footer.css";
import Link from 'next/link';

/*import { Container } from './container';
import { Button } from '../ui';
//import { ArrowRight, ShoppingCart } from 'lucide-react';
import { SearchInput } from './search-input';
import { cn } from '@/shared/lib/utils';
import { User, ShoppingCart, ArrowRight } from 'lucide-react';
//import { CartDrawer } from './cart-drawer';*/



export const Footer: React.FC = () => {

  return (

        <footer className="container">

                <div className="wrapper">



                    <div className="element link">
                        <ul className="list-unstyled">
                            <li><Link href="/#">О нас</Link></li>
                            <li><Link href="https://ilikeopt.ru/sotrudnichestvo">Сотрудничество</Link></li>
                            <li><Link href="https://ilikeopt.ru/dostavka">Доставка</Link></li>
                            <li><Link href="https://ilikeopt.ru/contacts">Контакты</Link></li>
                            <li><Link href="https://ilikeopt.ru/razmernaja-tablica">Размерные таблицы</Link></li>
                        </ul>
                    </div>


                    <div className="element">
                        <div>OOO АйЛайк</div>

                        <div className='contact'>	Контактные телефоны:
                            <ul>
                              <li>+7(925) 518-77-67 - АйЛайк</li>
                              <li>+7(926) 775-96-22 - Фёдор</li>
                              <li>+7(925) 090-00-10</li>
                              <li>+7(925) 090-33-38</li>
                              <li>+7(495) 518-77-67</li>
                            </ul>                                  
                        </div>

                        <div>© 2017–2025 Интернет-магазин iLikeOpt.ru</div>
                    </div>

                    <div className="element">
                        <div className="row-lg row-md">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-6 col-xs-6 col-xm-12">
                                    <div className="footer_head">Мы в соцсетях</div>
                                    <div className="social_img">
                                        <Link href="https://t.me/+FqtDNFUZco41OTIy">
										     <Image src="/soc/tg.svg" fill alt=""/>
                                        </Link>
                                        <Link href="https://vk.com/ilikeopt">
                                        <Image fill
                                                src="/soc/vk.svg"
                                                alt=""/></Link>
                                        <Link href="https://www.instagram.com/ilike_belio_opt/"><Image fill
                                                src="/soc/inst.svg"
                                                alt=""/></Link>
                                        <Link href="https://vm.tiktok.com/TSFxYb/"><Image
                                                src="/soc/tiktok.svg"
                                                alt=""/></Link>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-6 col-xs-6 col-xm-12">
                                    <div className="footer_head margin-top">Доставляем</div>
                                    <div className="delivery_wrapper">
                                        <Image src="/delivery/ems.jpg" fill  alt="" title=""/>
                                        <Image src="/delivery/pecom.jpg"  alt="" title=""/>
                                        <Image src="/delivery/del-line.jpg" alt="" title=""/>
                                        <Image src="/delivery/sdek.jpg" alt="" title=""/>
                                        <Image src="/delivery/pochta.jpg" alt="" title=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>


                </div>
                            
                <div className="copyright"> Сайт разрешает вам просматривать и загружать материалы этого сайта только для личного некоммерческого использования, при условии сохранения вами всей информации об авторском праве и других сведений о праве собственности, содержащихся в исходных материалах и любых их копиях. Запрещается изменять материалы этого Сайта, а также распространять или демонстрировать их в любом виде или использовать их любым другим образом для общественных или коммерческих целей. Любое использование этих материалов на других сайтах или в компьютерных сетях запрещается.
                </div>
        </footer>

  );
};
