import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import defaultUserPhoto from '../../../assets/defaultUserPhoto.png'

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }
    else {
        return (
            <div className={s.container}>
                <div>
                    <img src={props.profile.photos.large ? props.profile.photos.large : defaultUserPhoto} alt=""/>
                </div>
                <div className={s.container__description}>
                    <p>Обо мне: </p>
                    <h4>{props.profile.aboutMe}</h4>
                    <p>В поиске работы: {props.profile.lookingForAJob ? "да" : "нет"} </p>
                    <p>Дополнительная информация: {props.profile.lookingForAJobDescription}</p>
                </div>
            </div>
        )
    }
};

export default ProfileInfo;
