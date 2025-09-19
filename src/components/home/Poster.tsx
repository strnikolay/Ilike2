'use client'

import React from 'react';
import Image from 'next/image';
import "./poster.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';



export const Poster: React.FC = () => {

  return (
	<div id="slideshow" className="container owl-carousel slideshow owl-theme">
                    <div className="owl-wrapper-outer">
                        <Carousel className="owl-wrapper" autoPlay infiniteLoop showThumbs={false}>

                            <div className="owl-item">
                                <div className="item">
                                    <Link href="https://online.fliphtml5.com/ggqrf/wsit/#p=1">
                                        <Image src="/poster/poster_1.png" alt="каталог 2023" className="img-responsive"/>
                                    </Link>
                                </div>
                            </div>

                            <div className="owl-item">
                                <div className="item">
                                    <a href="https://ilikeopt.ru/contacts">
									<Image src="/poster/poster_2.png" alt="бизнес с нами" className="img-responsive"/>
                                    </a>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="item">
                                    <a href="https://ilikeopt.ru/bustgaltery/bolshie-razmery/">
                                    <Image src="/poster/poster_3.png" alt="гиганты" className="img-responsive"/>
                                    </a>
                                </div>
                            </div>
                            <div className="owl-item" >
                                <div className="item">
                                    <a href="https://ilikeopt.ru/ilike">
                                    <Image src="/poster/poster_1.png" alt="от производителя" className="img-responsive"/>
                                    </a>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="item">
                                    <a href="https://ilikeopt.ru/0513-aylayk-trusy">
                                    <Image src="/poster/poster_2.png" alt="513 биг сайз" className="img-responsive"/>
                                    </a>
                                </div>
                            </div>
                        </Carousel>
                    </div>

    </div>
  );
};
