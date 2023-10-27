'use client'



import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide, Autoplay } from 'swiper/react';
import styles from './Hero.module.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import icon1 from '../../../media/icons/instagramIcon.svg'
import icon2 from '../../../media/icons/mapIcon.svg'
import icon3 from '../../../media/icons/phoneIcon.svg'
import infoBg from '../../../media/img/Vector_bg.svg'
import Logo from '../../../media/img/Logo.svg'
import Image from 'next/image';

// import './styles.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper';

export default function Hero() {
    const arrayInfo = [
        { title: '0555 98 68 86', subtitle: '0500 98 68 86', icon: icon3 },
        { title: 'Бишкек, ул. Профсоюзная, 110/2', icon: icon2 },
        { title: '@shacman.center', icon: icon1 },
    ]

    return (
        <section className={styles.wrapper}>
            <div className={styles.contantWrapper}>
                <div className={styles.contant}>
                    <Image
                        src={infoBg}
                        className={styles.contant__imgBg}
                    />
                    <h1 className={styles.title}>
                        Добро пожаловать в будущий цифровой центр продаж грузовиков SHACMAN!
                    </h1>
                    <p className={styles.text}>
                        Приготовьтесь исследовать мир, где мощь сочетается с точностью, а производительность не знает границ. С нашим предстоящим запуском вы можете рассчитывать на удобный интерфейс и всестороннюю информацию о продукте!
                    </p>
                    <p className={styles.text}>
                        Следите за обновлениями, потому что в ближайшее время это пространство превратится в источник информации, предложений и экспертных знаний, которые приведут в восторг любого пользователя!
                    </p>
                    <div className={styles.info}>
                        <h2 className={styles.subtitle}>
                            Контакты для связи:
                        </h2>
                        <ul className={styles.info__list}>
                            {arrayInfo.map((item, key) =>
                                <li key={key} className={styles.info__item}>
                                    <Image
                                        src={item.icon}
                                        className={styles.info__img}
                                    />
                                    <div className={styles.info__textBox}>
                                        <div className={styles.info__text}>{item.title}</div>
                                        {item.subtitle &&
                                            <div className={styles.info__text}>
                                                {item.subtitle}
                                            </div>
                                        }
                                    </div>
                                </li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`${styles.slider}`}>
                <Image
                    src={Logo}
                    className={styles.slider__logoImg}
                />
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    speed={600}
                    parallax={true}
                    modules={[Parallax]}
                    className="mySwiper"
                    autoplay={{
                        delay: 3000,
                    }}
                >
                    <div
                        slot="container-start"
                        className="parallax-bg"
                        data-swiper-parallax="-23%"
                    ></div>
                    <div className={styles.slide}>
                        <SwiperSlide>
                            <div className="title" data-swiper-parallax="-300">
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                            </div>
                            <div className="text" data-swiper-parallax="-100">

                            </div>
                        </SwiperSlide>
                    </div>

                    <div className={styles.slide}>
                        <SwiperSlide>
                            <div className="title" data-swiper-parallax="-300">
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                            </div>
                            <div className="text" data-swiper-parallax="-100">

                            </div>
                        </SwiperSlide>
                    </div>

                    <div className={styles.slide}>
                        <SwiperSlide>
                            <div className="title" data-swiper-parallax="-300">
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                            </div>
                            <div className="text" data-swiper-parallax="-100">

                            </div>
                        </SwiperSlide>
                    </div>

                </Swiper>
            </div>
        </section>
    );
}
