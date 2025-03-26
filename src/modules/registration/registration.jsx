import Header from "../../components/Layouts/Header/Header.jsx";
import "./registration.css";

function Registration(){
    return(
        <>
            <Header/>
            <section className="registration">
                <div className="wrapper">
                <div className="registration__wrapper">
                    <form action="#" className="register__form">
                        <input type="text" className="register__input" id="register-name"  placeholder="Введите ваше ФИО"/>
                        <input type="text" className="register__input" id="register-number" placeholder="Введите номер телефона" />
                        <input type="password" className="register__input" id="register-login" placeholder="Придумайте логин"/>
                        <input type="password" className="register__input" id="register-password" placeholder="Придумайте пароль"/>
                        <button type="submit" className="register__btn">Зарегестрироваться</button>
                        <p className="alreadyRegistered">Уже зарегестрированы? <a href="/">Войти</a></p>
                    </form>
                </div>
                </div>
            </section>
        </>
    )
}
export default Registration;