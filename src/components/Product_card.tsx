'use client'

import React from 'react';
import Image from 'next/image';
import "./Product_card.css";
//import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {brandList, categoryList} from "../api/db"
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react-lite';
import { IProduct } from '@/store/interfaces';


interface Props {
    el:IProduct;
    index: number;
}

const Product_card: React.FC<Props> = ({el, index}) => {
    const {Store} = useStore()
    //console.log(el)

    const brand = brandList[el.brand]
    const category = categoryList[el.cat-1]

    return (
    <div key={index} className="product-card-wrap">
        <div className='title'>
            {el.id} {brand} {category}
        </div>
        <div className="image relative">
            <div className="images-add">
                <Image src={el.img[0]} alt="" className="img-responsive"/>
            </div>
            <div className="sticker">Хит</div>
            <div className="add-to-cart"></div>
            <div className="add-to-fav"></div>
            <div className="rating">
                <div className='star'></div>
                4.5
            </div>
        </div>

        <div className="caption">
            <h4>
                <span className="price_block">
                    <span className="stock">В наличии: 697 шт.</span>
                    <span className="artikul">Артикул {el.id}</span>
                </span>
            </h4>
            <div className='desc'>{el.desc}</div>
            <div className="card-footer">
                    <div className='price'>
                        ЦЕНА: {Store.isAuth?el.price:<div className='lock' title="Цена достувна авторизированым пользователям"/>}
                    </div>
                    <a href="https://ilikeopt.ru/0106-aylayk-byust" className="more_btn">
                        <span className="">Подробнее</span>
                    </a>
            </div>
        </div>
    </div>
    );
};

export default observer(Product_card)
 