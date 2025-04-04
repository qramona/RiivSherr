import Logo from '../../../assets/icons/Logo.png'
import Up from '../../../assets/icons/Up.png'
import Down from '../../../assets/icons/Down.png'
import '../../../components/BurgerMenu/Burger.css'
import { useEffect, useRef } from 'react'
import BurgerLogo from '../../../assets/buttons/BurgerLogo.png'
import CloseLogo from '../../../assets/buttons/CloseLogo.png'
import './Header.css'
import Burger from '../../BurgerMenu/Burger.jsx'

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
                    <li className="header__li">
                        <a
                            className="header__titles"
                            href="src/components/Layouts/Header#"
                            onClick={handleSubtitleClick}
                        >
                            Услуги
                        </a>
                        <button className="button-up">
                            <img className="up-img" src={Up} alt="Up button" />
                            <img
                                className="down-img"
                                src={Down}
                                alt="Down button"
                            />
                        </button>
                        <ul className="header__subtitles-ul">
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
                    </li>
                    <li className="header__li">
                        <a
                            className="header__titles"
                            href="src/components/Layouts/Header#"
                            onClick={handleSubtitleClick}
                        >
                            Расписание
                        </a>
                        <button className="button-up">
                            <img className="up-img" src={Up} alt="Up button" />
                            <img
                                className="down-img"
                                src={Down}
                                alt="Down button"
                            />
                        </button>
                        <ul className="header__subtitles-ul">
                            <li className="li__subtitle">
                                <a href="#">Расписание 1</a>
                            </li>
                            <li className="li__subtitle">
                                <a href="#">Расписание 2</a>
                            </li>
                            <li className="li__subtitle">
                                <a href="#">Расписание 3</a>
                            </li>
                        </ul>
                    </li>
                    <li className="header__li">
                        <a
                            className="header__titles"
                            href="src/components/Layouts/Header#"
                            onClick={handleSubtitleClick}
                        >
                            О нас
                        </a>
                        <button className="button-up">
                            <img className="up-img" src={Up} alt="Up button" />
                            <img
                                className="down-img"
                                src={Down}
                                alt="Down button"
                            />
                        </button>

                        <ul className="header__subtitles-ul">
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
                    </li>
                    <li className="header__li">
                        <a
                            className="header__titles"
                            href="src/components/Layouts/Header#"
                            onClick={handleSubtitleClick}
                        >
                            Контакты и поддержка
                        </a>
                        <button className="button-up">
                            <img className="up-img" src={Up} alt="Up button" />
                            <img
                                className="down-img"
                                src={Down}
                                alt="Down button"
                            />
                        </button>
                        <ul className="header__subtitles-ul">
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
                    </li>
                    <li className="header__li">
                        <a href="src/components/Layouts/Header#">Новости</a>
                    </li>
                    <li className="header__li input">
                        <input
                            className="header__input input"
                            type="text"
                            placeholder="Поиск"
                        />
                    </li>
                    <li className="header__li">
                        <a href="src/components/Layouts/Header#">
                            Личный кабинет
                        </a>
                    </li>
                </ul>
                <Burger></Burger>
            </nav>
        </header>
    )
}
export default Header
