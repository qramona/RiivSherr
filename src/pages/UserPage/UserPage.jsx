import Header from '@/components/Layouts/Header/Header.jsx'
import './UserPage.css'
import Departure from '../../assets/icons/Departure.png'
import Arrival from '../../assets/icons/Arrival.png'
import Ship from '../../assets/icons/Ship.png'
import PassIcon from '../../assets/icons/PassIcon.png'
import Calendar from '../../assets/icons/Calendar.png'
import Duration from '../../assets/icons/Duration.png'

import React, { useState } from 'react'

function UserPage() {
    return (
        <>
            <Header />
            <div className="userPage__wrapper">
                <div className="userPage__block1 userPage__block">
                    <form className="userPage__form" action="#">
                        <div className="userPage__form-wrapper">
                            <input
                                className="userPage__input"
                                type="text"
                                placeholder="Откуда"
                            />
                        </div>
                        <div className="userPage__form-wrapper">
                            <img src={Arrival} alt="Arrival" />
                            <input
                                className="userPage__input"
                                type="text"
                                placeholder="Куда"
                            />
                        </div>
                        <div className="userPage__form-wrapper">
                            <img src={Ship} alt="Ship" />
                            <input
                                className="userPage__input"
                                type="text"
                                placeholder="Бортовой номер судна"
                            />
                        </div>
                        <div className="userPage__form-wrapper">
                            <img src={PassIcon} alt="Passenger" />
                            <input
                                className="userPage__input"
                                type="number"
                                placeholder="Количество пассажиров"
                            />
                        </div>
                        <div className="userPage__form-wrapper">
                            <img src={Calendar} alt="Date of trip" />
                            <input
                                className="userPage__input"
                                type="date"
                                placeholder="Дата поездки"
                            />
                        </div>
                        <div className="userPage__form-wrapper">
                            <img src={Duration} alt="Trip duration" />
                            <input
                                className="userPage__input"
                                type="number"
                                placeholder="Время поездки"
                            />
                        </div>
                        <button className="userPage__button" type="submit">
                            Забронировать
                        </button>
                    </form>
                </div>
                <div className="userPage__block2 userPage__block">
                    <iframe
                        className="userPage__block2 userPage__block"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad57e149962811a8e1b7c2fc9f963f7ef273af78b08be6cad1850d7fafcd98117&amp;source=constructor"
                        frameBorder="0"
                    ></iframe>
                </div>
            </div>
        </>
    )
}
export default UserPage
