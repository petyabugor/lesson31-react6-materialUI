import React from 'react'
import  './Footer.css'
import { Link } from 'react-router-dom'
import inst from '../../assets/img/instagram.png'
const Footer = ()=> {
        return (
        <footer className="case">
                <div className="case__container _container-narrow">
                <div className="case__wrapper"> 
                        <div className="case__right">
                            <div className="case__right__column">
                                <p className="case__right__column__title">Інформація</p>
                                <ul>
                                    <li className="case__right__column__item"> 
                                        <Link to="" className="case__right__column__link">Оплата</Link>
                                    </li>
                                    <li className="case__right__column__item"> 
                                        <Link to="" className="case__right__column__link">Обмін і повернення</Link>
                                    </li>
                                    <li className="case__right__column__item"> 
                                        <Link to="" className="case__right__column__link">Карта сайту</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="case__right__column">
                                <p className="case__right__column__title">Про компанію</p>
                                <ul>
                                    <li className="case__right__column__item"> 
                                        <Link to="" className="case__right__column__link">Магазини</Link>
                                    </li>
                                    <li className="case__right__column__item"> 
                                        <Link to="" className="case__right__column__link">Блог</Link>
                                    </li>
                                    <li className="case__right__column__item"> 
                                        <Link to="" className="case__right__column__link">Відгуки</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="case__right__column">
                                <p className="case__right__column__title">Ми в соцмережах</p>
                                <ul>
                                    <li className="case__right__column__item"> 
                                        <Link to="" className="case__right__column__link">
                                            <img src={inst} alt="" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="case__right__column">
                                <p className="case__right__column__title">Контакти:</p>
                                <ul>
                                    <li className="case__right__column__item"> 
                                        <Link to="" className="case__right__column__link">(091) 852-57-71</Link>
                                    </li>
                                    <li className="case__right__column__item"> 
                                        <Link to="" className="case__right__column__link">Trendshop@gmail.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="footer__content">
                            <div className="footer__content__left">
                                <div className="footer__content__left__logo">
                                    Trendshop
                                </div>
                            </div>
                            <div className="footer__content__right">
                                <p className="footer__content__right__text">©2001-2020</p>
                                <p className="footer__content__right__text">All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
      )
}

  

export default Footer;