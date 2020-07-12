import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    // в будущем каждый друг - кликабельный , т.е. обернуть в НавЛинк //
    // профиль чела /profile/его_id

    let friends = props.friends.map((friend) =>
        (<div className={s.item__friendsElem}>
            <NavLink to={`/profile/${friend.id}`}>
                <img src={friend.avatar} alt="avatar"/><br/>
                <span>{friend.name}</span>
            </NavLink>
        </div>));

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
        <div className={s.item}>
            <NavLink to="/users" activeClassName={s.activeLink}>Find Peoples</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Friends</NavLink>
            <div className={s.item__friends}>
                {friends}
            </div>
        </div>
    </nav>
}

export default Navbar;
