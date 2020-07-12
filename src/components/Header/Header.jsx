import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import defaultUserPhoto from '../../assets/defaultUserPhoto.png'

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
        {props.isLogined ? <>
            <div></div>
            <div className={s.login__JobSatus}>
                <b>В поиске работы: <span style={{fontStyle: "italic"}}>{ props.lookingJob ? "ДА" : "НЕТ" }</span></b>
            </div>
            <div className={s.login}>
                <h4>{props.login}</h4>
            </div>
            <div className={s.login}>
                <img src={props.miniAvatar ? props.miniAvatar : defaultUserPhoto} alt="avatar"/>
            </div>

        </> : <NavLink to={'/login'}/>}

    </header>
}

export default Header;
