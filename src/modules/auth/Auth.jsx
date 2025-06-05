import Header from '@/components/Layouts/Header/Header.jsx'
import UserPage from '../../pages/UserPage/UserPage.jsx'
import React, { useState } from 'react'
import './Auth.css'
import registration from '../registration/registration.jsx'
import { Link } from 'react-router-dom'

function Auth() {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    })
    const [errors, setErrors] = useState({
        login: false,
        password: false,
    })
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const validationErrors = {
            login: formData.login.trim() === '',
            password: formData.password.trim() === '',
        }

        setErrors(validationErrors)

        if (!validationErrors.login && !validationErrors.password) {
            setIsAuthenticated(true) // "Авторизуем" пользователя
        }
    }

    // Если авторизован - показываем UserPage
    if (isAuthenticated) {
        return <UserPage username={formData.login} />
    }

    return (
        <>
            <Header />
            <section className="Auth">
                <div className="wrapper">
                    <div className="Auth__wrapper">
                        <div className="Auth__block Auth__block1">
                            <b className="Auth__title">Добро пожаловать</b>
                            <h3 className="Auth__subtitle">
                                Войдите в личный кабинет
                                <br />
                                для начала работы
                            </h3>
                        </div>

                        <div className="Auth__block Auth__block2">
                            <div className="block2__wrapper">
                                <form
                                    className="Auth__form"
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        id="Login"
                                        type="text"
                                        placeholder="Логин"
                                        value={formData.login}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                login: e.target.value,
                                            })
                                        }
                                        className={errors.login ? 'error' : ''}
                                    />
                                    {errors.login && (
                                        <span className="error-message">
                                            Введите логин
                                        </span>
                                    )}
                                    <input
                                        id="Password"
                                        type="password"
                                        placeholder="Пароль"
                                        value={formData.password}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                password: e.target.value,
                                            })
                                        }
                                        className={
                                            errors.password ? 'error' : ''
                                        }
                                    />
                                    {errors.password && (
                                        <span className="error-message">
                                            Введите пароль
                                        </span>
                                    )}
                                    <Link to="/" className="resetPassword">
                                        Забыли Пароль?
                                    </Link>
                                    <button type="submit" className="Auth-btn">
                                        Войти
                                    </button>
                                    <p className="Registr__link">
                                        Еще нет аккаунта?{' '}
                                        <Link to="/registration">
                                            Зарегестрируйтесь
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Auth
