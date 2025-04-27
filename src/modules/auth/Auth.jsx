import Header from '@/components/Layouts/Header/Header.jsx'
import './Auth.css'
import registration from '../registration/registration.jsx'
import { Link } from 'react-router-dom'
function Auth() {
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
                                <form className="Auth__form" action="#">
                                    <input
                                        className="Auth__input"
                                        id="Login"
                                        type="text"
                                        placeholder="Логин"
                                    />
                                    <input
                                        className="Auth__input"
                                        id="Password"
                                        type="text"
                                        placeholder="Пароль"
                                    />
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
