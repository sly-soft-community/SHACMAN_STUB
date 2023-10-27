'use client'
import React, {useState, memo} from 'react';
import styles from "./Header.module.scss"
import Image from 'next/image'
import social_icon1 from '@/media/icons/inst-icon.svg'
import social_icon2 from '@/media/icons/whats-app-icon.svg'
import logo from '@/media/synergy-logo.svg'
import Select from '../Select/Select';
import {i18n} from '../../../../i18n-config'

function Header({lang, dictionary}) {
    const navList = [
        {value: dictionary['header']['about-us'], href: '#about'},
        {value: dictionary['header'].services, href: '#service'},
        {value: dictionary['header'].types, href: '#equipment'},
        {value: dictionary['header'].leave, href: '#feedback'},
        {value: dictionary['header'].contacts, href: '#contacts'},
    ]
    const socialArr = [
        {
            icon: social_icon1,
            href: 'https://www.instagram.com/synergy.healthcare.kg/'
        },
        {
            icon: social_icon2,
            href: 'https://api.whatsapp.com/send/?phone=996557155551&text&type=phone_number&app_absent=0'
        },
    ]

    const [open, setOpen] = useState(false)

    return (
        <div className={styles.wrapper}>
            <header className={open ? `${styles.header} ${styles.open}` : styles.header}>
                <div className={styles.header__logoBox}>
                    <Image
                        src={logo}
                        alt="Logo"
                        className={styles.logo}
                        width={110}
                        height={36}
                        priority
                    />
                </div>
                <ul className={open ? `${styles.nav} ${styles.open}` : styles.nav}>
                    <li className={styles.nav__item_sm} >
                        <button className={styles.header__btn_sm}>{dictionary['header']['med-equipment']}</button>
                    </li>
                    {navList.map((item, i) =>
                        <li key={i} onClick={() => setOpen(false)} className={styles.nav__item} >
                            <a className={styles.nav__link} href={item.href}>{item.value}</a>
                        </li>
                    )}
                    <li className={`${styles.nav__item_sm} ${styles.socialRow}`} >
                        {socialArr.map((item, i) =>
                            <a target='_blank' href={item.href} key={i} className={styles.socialRow__item}>
                                <Image src={item.icon} alt="social media" />
                            </a>
                        )}
                    </li>
                </ul>
                <div className={styles.header__btnBox}>
                    <Select
                        data={i18n.locales}
                        value={lang} />
                    <button className={styles.header__btn}>{dictionary['header']['med-equipment']}</button>
                    <div onClick={() => {
                        setOpen(prev => !prev)
                    }}
                        className={styles.header__burger}>
                        <div className={open ? `${styles.header__burger_icon} ${styles.open}` : styles.header__burger_icon} />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default memo(Header);
