'use client'
import React from 'react';
import styles from "./HeroSlide.module.scss"
import Image from 'next/image';

const HeroSlide = ({title, img, dictionary}) => {
    return (
        <div className={styles.slide}>
            <div className={styles.slide__contantBox}>
                <h3 style={{paddingTop: title.length > 39 ? 0 : '24px'}} className={styles.slide__title}>{title}</h3>
                <a className={styles.slide__btn} href='#feedback'>{dictionary['hero']['get-advice']}</a>
            </div>
            <div className={styles.slide__imgBox}>
                <div className={styles.slide__imgWrapper}>
                    <Image src={img} alt="slide image" className={styles.slide__img} />
                </div>
            </div>
        </div>
    );
};

export default HeroSlide;
