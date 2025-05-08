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
            <Link className="Logo" to="/">
                <img src={Logo} alt="Logo" />
            </Link>
            <nav className="header__nav">
                <ul className="header__ul">
                    <button className="uk-button header__button" type="button">
                        Услуги
                    </button>
                    <div data-uk-dropdown="mode: click">
                        <ul className="uk-nav uk-dropdown-nav">
                            <li className="li__subtitle">
                                <Link to="#">Услуга 1</Link>
                            </li>
                            <li className="li__subtitle">
                                <Link to="#">Услуга 2</Link>
                            </li>
                            <li className="li__subtitle">
                                <Link to="#">Услуга 3</Link>
                            </li>
                        </ul>
                    </div>

                    <button className="uk-button" type="button">
                        Услуги
                    </button>
                    <div data-uk-dropdown="mode: click">
                        <ul className="uk-nav uk-dropdown-nav">
                            <li className="li__subtitle">
                                <Link to="#">Услуга 1</Link>
                            </li>
                            <li className="li__subtitle">
                                <Link to="#">Услуга 2</Link>
                            </li>
                            <li className="li__subtitle">
                                <Link to="#">Услуга 3</Link>
                            </li>
                        </ul>
                    </div>

                    <button className="uk-button" type="button">
                        Услуги
                    </button>
                    <div data-uk-dropdown="mode: click">
                        <ul className="uk-nav uk-dropdown-nav">
                            <li className="li__subtitle">
                                <Link to="#">Услуга 1</Link>
                            </li>
                            <li className="li__subtitle">
                                <Link to="#">Услуга 2</Link>
                            </li>
                            <li className="li__subtitle">
                                <Link to="#">Услуга 3</Link>
                            </li>
                        </ul>
                    </div>

                    <button className="uk-button" type="button">
                        Услуги
                    </button>
                    <div data-uk-dropdown="mode: click">
                        <ul className="uk-nav uk-dropdown-nav">
                            <li className="li__subtitle">
                                <Link to="#">Услуга 1</Link>
                            </li>
                            <li className="li__subtitle">
                                <Link to="#">Услуга 2</Link>
                            </li>
                            <li className="li__subtitle">
                                <Link to="#">Услуга 3</Link>
                            </li>
                        </ul>
                    </div>

                    {/*<li className="header__li">*/}
                    {/*    <a*/}
                    {/*        className="header__titles"*/}
                    {/*        href="src/components/Layouts/Header#"*/}
                    {/*        onClick={handleSubtitleClick}*/}
                    {/*    >*/}
                    {/*        Расписание*/}
                    {/*    </a>*/}
                    {/*    <button className="button-up">*/}
                    {/*        <img className="up-img" src={Up} alt="Up button" />*/}
                    {/*        <img*/}
                    {/*            className="down-img"*/}
                    {/*            src={Down}*/}
                    {/*            alt="Down button"*/}
                    {/*        />*/}
                    {/*    </button>*/}
                    {/*    <ul className="header__subtitles-ul">*/}
                    {/*        <li className="li__subtitle">*/}
                    {/*            <a href="#">Расписание 1</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="li__subtitle">*/}
                    {/*            <a href="#">Расписание 2</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="li__subtitle">*/}
                    {/*            <a href="#">Расписание 3</a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                    {/*<li className="header__li">*/}
                    {/*    <a*/}
                    {/*        className="header__titles"*/}
                    {/*        href="src/components/Layouts/Header#"*/}
                    {/*        onClick={handleSubtitleClick}*/}
                    {/*    >*/}
                    {/*        О нас*/}
                    {/*    </a>*/}
                    {/*    <button className="button-up">*/}
                    {/*        <img className="up-img" src={Up} alt="Up button" />*/}
                    {/*        <img*/}
                    {/*            className="down-img"*/}
                    {/*            src={Down}*/}
                    {/*            alt="Down button"*/}
                    {/*        />*/}
                    {/*    </button>*/}

                    {/*    <ul className="header__subtitles-ul">*/}
                    {/*        <li className="li__subtitle">*/}
                    {/*            <a href="#">О нас 1</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="li__subtitle">*/}
                    {/*            <a href="#">О нас 2</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="li__subtitle">*/}
                    {/*            <a href="#">О нас 3</a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                    {/*<li className="header__li">*/}
                    {/*    <a*/}
                    {/*        className="header__titles"*/}
                    {/*        href="src/components/Layouts/Header#"*/}
                    {/*        onClick={handleSubtitleClick}*/}
                    {/*    >*/}
                    {/*        Контакты и поддержка*/}
                    {/*    </a>*/}
                    {/*    <button className="button-up">*/}
                    {/*        <img className="up-img" src={Up} alt="Up button" />*/}
                    {/*        <img*/}
                    {/*            className="down-img"*/}
                    {/*            src={Down}*/}
                    {/*            alt="Down button"*/}
                    {/*        />*/}
                    {/*    </button>*/}
                    {/*    <ul className="header__subtitles-ul">*/}
                    {/*        <li className="li__subtitle">*/}
                    {/*            <a href="#">Контакты и поддержка 1</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="li__subtitle">*/}
                    {/*            <a href="#">Контакты и поддержка 2</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="li__subtitle">*/}
                    {/*            <a href="#">Контакты и поддержка 3</a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                    {/*<li className="header__li">*/}
                    {/*    <a href="#">Новости</a>*/}
                    {/*</li>*/}
                    <li className="header__li input">
                        <input
                            className="header__input input"
                            type="text"
                            placeholder="Поиск"
                        />
                    </li>
                    <button className="uk-button" type="button">
                        Услуги
                    </button>
                    <div data-uk-dropdown="mode: click">
                        <ul className="uk-nav uk-dropdown-nav">
                            <li className="li__subtitle">
                                <Link to="#">Услуга 1</Link>
                            </li>
                            <li className="li__subtitle">
                                <Link to="#">Услуга 2</Link>
                            </li>
                            <li className="li__subtitle">
                                <Link to="#">Услуга 3</Link>
                            </li>
                        </ul>
                    </div>
                </ul>
                <Burger></Burger>
            </nav>
        </header>
    )
}
export default Header
