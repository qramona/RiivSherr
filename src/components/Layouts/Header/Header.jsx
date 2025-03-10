import Logo from "../../../assets/icons/Logo.png";
import Up from "../../../assets/icons/Up.png";
import Down from "../../../assets/icons/Down.png";
import BurgerLogo from "../../../assets/buttons/BurgerLogo.png";
import CloseLogo from "../../../assets/buttons/CloseLogo.png";
import "./Header.css";
import Burger from "../../BurgerMenu/Burger.jsx";

function Header(){
    return(
        <header className="Header">
                    <a className="Logo" href="src/components/Layouts/Header#">
                        <img src={Logo} alt="Logo"/>
                    </a>
            <nav className="header__nav">
                <ul className="header__ul">
                    <li className="header__li">
                        <a href="src/components/Layouts/Header#">Услуги</a>
                        <button className="button-up">
                            <img className="up-img" src={Up} alt="Up button"/>
                            <img className="down-img" src={Down} alt="Down button"/>
                        </button>
                    </li>
                    <li className="header__li">
                        <a href="src/components/Layouts/Header#">Расписание</a>
                        <button className="button-up">
                            <img className="up-img" src={Up} alt="Up button"/>
                            <img className="down-img" src={Down} alt="Down button"/>
                        </button>
                    </li>
                    <li className="header__li">
                        <a href="src/components/Layouts/Header#">О нас</a>
                        <button className="button-up">
                            <img className="up-img" src={Up} alt="Up button"/>
                            <img className="down-img" src={Down} alt="Down button"/>
                        </button>
                    </li>
                    <li className="header__li">
                        <a href="src/components/Layouts/Header#">Контакты и поддержка</a>
                        <button className="button-up">
                            <img className="up-img" src={Up} alt="Up button"/>
                            <img className="down-img" src={Down} alt="Down button"/>
                        </button>
                    </li>
                    <li className="header__li">
                        <a href="src/components/Layouts/Header#">Новости</a>
                    </li>
                    <li className="header__li input">
                        <input className="header__input input" type="text" placeholder="Поиск"/>
                    </li>
                    <li className="header__li">
                        <a href="src/components/Layouts/Header#">Личный кабинет</a>
                    </li>
                </ul>
            </nav>
            <Burger></Burger>
        </header>
    )
}
export default Header;