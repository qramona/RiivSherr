import Logo from '@/assets/icons/Logo.png'
import Up from '@/assets/icons/Up.png'
import Down from '@/assets/icons/Down.png'
import '@/components/BurgerMenu/Burger.css'
import { useEffect, useRef } from 'react'
import BurgerLogo from '@/assets/buttons/BurgerLogo.png'
import CloseLogo from '@/assets/buttons/CloseLogo.png'
import './Header.css'
import Burger from '../../BurgerMenu/Burger.jsx'
import { Link } from 'react-router-dom'

function Header() {
    const handleSubtitleClick = (e) => {
        e.preventDefault()
        const currentMenu = e.currentTarget
            .closest('.header__li')
            .querySelector('.header__subtitles-ul')

        document.querySelectorAll('.header__subtitles-ul').forEach((menu) => {
            menu.classList.remove('active')
        })
        currentMenu.classList.toggle('active')
    }

    return (
        <header className="Header">
            <a className="Logo" href="/">
                <img src={Logo} alt="Logo" />
            </a>
            <nav className="header__nav">
                <ul className="header__ul">
                    <button className="uk-button header__title" type="button">
                        Услуги
                    </button>
                    <div data-uk-dropdown="mode: click">
                        <ul className="uk-nav uk-dropdown-nav">
                            <li className="li__subtitle">
                                <a href="#">Услуга 1</a>
                            </li>
                            <li className="li__subtitle">
                                <a href="#">Услуга 2</a>
                            </li>
                            <li className="li__subtitle">
                                <a href="#">Услуга 3</a>
                            </li>
                        </ul>
                    </div>

                    <button className="uk-button header__title" type="button">
                        Расписание
                    </button>
                    <div data-uk-dropdown="mode: click">
                        <ul className="uk-nav uk-dropdown-nav">
                            <li className="li__subtitle">
                                <a href="#"> Расписание 1</a>
                            </li>
                            <li className="li__subtitle">
                                <a href="#"> Расписание 2</a>
                            </li>
                            <li className="li__subtitle">
                                <a href="#"> Расписание 3</a>
                            </li>
                        </ul>
                    </div>

                    <button className="uk-button header__title" type="button">
                        О нас
                    </button>
                    <div data-uk-dropdown="mode: click">
                        <ul className="uk-nav uk-dropdown-nav">
                            <li className="li__subtitle">
                                <a href="#">О нас 1</a>
                            </li>
                            <li className="li__subtitle">
                                <a href="#">О нас 2</a>
                            </li>
                            <li className="li__subtitle">
                                <a href="#">О нас 3</a>
                            </li>
                        </ul>
                    </div>

                    <button className="uk-button header__title" type="button">
                        Контакты и поддержка
                    </button>
                    <div data-uk-dropdown="mode: click">
                        <ul className="uk-nav uk-dropdown-nav">
                            <li className="li__subtitle">
                                <a href="#">Контакты и поддержка 1</a>
                            </li>
                            <li className="li__subtitle">
                                <a href="#">Контакты и поддержка 2</a>
                            </li>
                            <li className="li__subtitle">
                                <a href="#">Контакты и поддержка 3</a>
                            </li>
                        </ul>
                    </div>
                    <button className="uk-button header__title" type="button">
                        Новости
                    </button>
                    <div data-uk-dropdown="mode: click">
                        <ul className="uk-nav uk-dropdown-nav">
                            <li className="li__subtitle">
                                <a href="#">Новости 1</a>
                            </li>
                            <li className="li__subtitle">
                                <a href="#">Новости 2</a>
                            </li>
                            <li className="li__subtitle">
                                <a href="#">Новости 3</a>
                            </li>
                        </ul>
                    </div>

                    <li className="header__li input">
                        <input
                            className="header__input input"
                            type="text"
                            placeholder="Поиск"
                        />
                    </li>

                    <Link to="/" className="header__userProfile">
                        <div className="Header__userIcon">
                            <img src={Up} alt="" />
                        </div>
                        <button
                            className="uk-button header__title"
                            type="button"
                        >
                            Имя пользователя
                        </button>
                    </Link>
                </ul>
                <Burger></Burger>
            </nav>
        </header>
    )
}
export default Header
