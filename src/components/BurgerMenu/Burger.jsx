import React, { useRef, useState } from "react";
import CloseLogo from "../../assets/buttons/CloseLogo.png";
import BurgerLogo from "../../assets/buttons/BurgerLogo.png"
let CloseBurger = document.getElementById('CloseLogoId');
let BurgerLogoId = document.getElementById('BurgerLogoId');

function Burger(){
const closeBurgerRef = useRef(null);
const burgerLogoRef = useRef(null);

// Используем useState для управления видимостью элементов
    const [isBurgerVisible, setIsBurgerVisible] = useState(true);
    // Обработчик клика по бургеру
    const handleBurgerClick = () => {
        setIsBurgerVisible(false); // Скрываем бургер и показываем крестик
    };

    // Обработчик клика по крестику
    const handleCloseClick = () => {
        setIsBurgerVisible(true); // Показываем бургер и скрываем крестик
    };

    return (
        <div className="burger__menu">
            {/* Крестик */}
            <div
                className="CloseLogo"
                ref={closeBurgerRef}
                style={{ display: isBurgerVisible ? "none" : "flex" }}
                onClick={handleCloseClick}
            >
                <img src={CloseLogo} alt="CloseLogo" />
                <div className="BurgerItems">
                    <ul>
                        <li className="BurgerItems-li">
                            <a href="#">Услуги</a>
                        </li>
                        <li className="BurgerItems-li">
                            <a href="#">Расписание</a>
                        </li>
                        <li className="BurgerItems-li">
                            <a href="#">О нас</a>
                        </li>
                        <li className="BurgerItems-li">
                            <a href="#">Контакты</a>
                        </li>
                        <li className="BurgerItems-li">
                            <a href="#">Новости</a>
                        </li>
                        <li className="BurgerItems-li">
                            <a href="#">Личный кабинет</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Бургер */}
            <div
                className="BurgerLogo"
                ref={burgerLogoRef}
                style={{ display: isBurgerVisible ? "flex" : "none" }}
                onClick={handleBurgerClick}
            >
                <img src={BurgerLogo} alt="BurgerLogo" />
            </div>
        </div>
    );

}
// BurgerLogoId.addEventListener('click', function(){
//     CloseBurger.style.display = "flex";
//     BurgerLogoId.style.display = "none";
// })


export default Burger;