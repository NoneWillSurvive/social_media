import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const People = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <li className={`${s.people}`}>
            <NavLink to={path} activeClassName={s.people__active}> {props.name} </NavLink>
        </li>
    )
}

export default People;
