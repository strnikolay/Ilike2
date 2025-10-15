'use client'

import React, {FC} from 'react';
import Image from 'next/image';
import "./Product_card.css";
//import { Carousel } from "react-responsive-carousel";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import {brandList, categoryList} from "@/api/db";
import {IProduct} from "@/store/interfaces";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';


interface Props {
    el:IProduct;
    index: number;
}



const Product_page:FC<Props> = observer(({el, index}) => {
    const {Store} = useStore()
    //const [isFav, setIsFav] = useState(false)
    

    /*useEffect(()=>{
        if(Store.user.fav.includes(el.id)){
            setIsFav(true)
        } else {
            setIsFav(false)
        }
    },[Store.user.fav])

    useEffect(()=>{
        const findItem = Store.user.cart.find((elInCart)=> elInCart.id === el.id)
        if(findItem){
            setIsInCart(true)
        } else {
            setIsInCart(false)
        }
    },[Store.user.fav])

    const brand = brandList[el.brand]
    const category = categoryList[el.cat-1]

    const addToFavHandler = () =>{
        if(isFav){
            //console.log("handler remove")
            Store.removeFav(el.id)
            setIsFav(false)
        } else {
            //console.log("handler add")
            Store.addToFav(el.id)
            setIsFav(true)
        }
    }

    const addToCartHandler = () =>{
        if(isInCart){
            //console.log("handler remove")
            Store.removeFromCart(el.id)
            setIsInCart(false)
        } else {
            //console.log("handler add")
            Store.addToCart(el.id)
            setIsInCart(true)
        }
    }*/

    return (
    <div key={index} className="product-card-wrap">
        <div className='title'>
            {el.id} {brandList[el.brand]} {categoryList[el.cat-1].cat_title}
        </div>
        <div className="image relative">
            <div className="images-add">
                <Image src={el.img[0]} fill sizes="10vw" alt="" className="img-responsive"/>
            </div>
            <div className="sticker">Хит</div>
            <div className="add-to-cart"></div>
            <input 
                type='button' 
                //className={`cart-icon `+(isInCart?"remove-cart":"add-cart")} 
                //onClick={addToCartHandler}
            />
            <input 
                type='button' 
                //className={`fav-icon `+(isFav?"remove-fav":"add-fav")} 
                //onClick={addToFavHandler}
            />
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
});

export default (Product_page)
 
