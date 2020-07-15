import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import defaultUserPhoto from '../../assets/defaultUserPhoto.png'
import logo from '../../assets/logo-ex-7.png'

const Header = (props) => {
    return <header className={s.header}>
        <img src={logo}/>
        {props.isLogined ? <>
            <div></div>
            <div className={s.login__JobSatus}>
                <b>В поиске работы: <span style={{fontStyle: "italic"}}>{props.lookingJob ? "ДА" : "НЕТ"}</span></b>
            </div>
            <div className={s.login}>
                <h4>{props.login}</h4>
            </div>
            <div className={s.login}>
                <img src={props.miniAvatar ? props.miniAvatar : defaultUserPhoto} alt="avatar"/>
            </div>

        </> : <>
            <div></div>
            <div></div>
            <div></div>
            <NavLink className={s.header__login} to={'/login'}>Login</NavLink>} </>
        }

    </header>
}

export default Header;
