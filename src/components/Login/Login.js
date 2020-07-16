import React from 'react';
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

const Login = (props) => {

    if(props.isLogined) {
        return (
            <div>
                <h3>Вы успешно авторизованы.</h3>
                <h3>Перейти в <NavLink to={"/profile"}>профиль</NavLink>? </h3>
            </div>
        )
    }
    else {
        return (
            <div>
                <h3>Вы не авторизованы. Войдите в сеть.</h3>
                <div>
                    <NavLink to="/login">Войти</NavLink>
                </div>
            </div>
        );
    }
};

export default Login;
