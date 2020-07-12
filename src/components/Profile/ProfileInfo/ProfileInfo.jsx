import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className={s.container}>
            <div className={s.container__img}>
                <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt="backImg"/>
            </div>
            <div className={s.container__description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
