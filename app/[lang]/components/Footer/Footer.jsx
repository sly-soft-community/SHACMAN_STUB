import React from 'react';
import styles from "./Footer.module.scss"
import Image from 'next/image';
import logoLargeImg from '@/media/img/logo-large.png'
import social_icon1 from '@/media/icons/inst-icon.svg'
import social_icon2 from '@/media/icons/whats-app-icon.svg'
import social_icon3 from '@/media/icons/tg-icon.svg'
import icon1 from '@/media/icons/location-icon.svg'
import icon2 from '@/media/icons/mail-icon.svg'
import icon3 from '@/media/icons/tel-icon.svg'
import SlyLogo from '@/media/img/sly-logo.png';


const Footer = ({dictionary}) => {
    const navList = [
        {value: dictionary['footer']['about-us'], href: '#about'},
        {value: dictionary['footer'].services, href: '#service'},
        {value: dictionary['footer'].types, href: '#equipment'},
        {value: dictionary['footer'].leave, href: '#feedback'},
        {value: dictionary['footer'].contacts, href: '#contacts'},
    ]

    const contactsList = [
        {
            icon: icon2,
            title: dictionary['footer']['city'],
            subtitle: dictionary['footer']['street']
        },
        {
            icon: icon3,
            title: '+996 557 15 55 51',
            underline: true
        },
        {
            icon: icon1,
            title: 'info@synergygroup.kg',
        },
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
    return (
        <footer className={styles.footer}>
            <div className={`${styles.contant} container`}>
                <div className={styles.contant__infoCol}>
                    <Image src={logoLargeImg} alt="" className={styles.contant__logo} />
                    <div className={styles.contant__text}>
                        {dictionary['footer']['text']}
                    </div>
                    <div className={styles.contant__link_md}>{dictionary['footer']['privacy-policy']}</div>
                </div>
                <div className={styles.contant__navCol}>
                    <ul className={styles.navList}>
                        {navList.map((item, i) =>
                            <li key={i} className={styles.navList__item}>
                                <a className={styles.navList__link} href={item.href}>{item.value}</a>
                            </li>
                        )}
                    </ul>
                    <div className={styles.contant__link}>{dictionary['footer']['privacy-policy']}</div>
                </div>
                <div className={styles.contant__contactCol}>
                    <ul className={styles.contactsList}>
                        {contactsList.map((item, i) =>
                            <li key={i} className={Boolean(item.subtitle) ? styles.contactsList__item : `${styles.contactsList__item_center}`}>
                                <Image src={item.icon} className={styles.contactsList__img} alt="icon" />
                                <div className={styles.contactsList__box}>
                                    <div className={styles.contactsList__title}>{item.title}</div>
                                    <div className={styles.contactsList__subTitle}>{item.subtitle}</div>
                                </div>
                            </li>
                        )}
                    </ul>
                    <div className={styles.socialRow}>
                        {socialArr.map((item, i) =>
                            <a target='_blank' href={item.href} key={i} className={styles.socialRow__item}>
                                <Image src={item.icon} alt="social media" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className={`${styles.companyInfo} container`}>
                <div className={styles.companyInfo__row}>
                    <div className={styles.companyInfo__title}>
                        {dictionary['footer']['synergy']}
                    </div>
                    <a target='_blank' href='https://slysoft.dev' className={styles.devInfo}>
                        <div className={styles.devInfo__title}>Powered by:</div>
                        <Image src={SlyLogo} alt="SLY SOFT" className={styles.devInfo__img} />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
