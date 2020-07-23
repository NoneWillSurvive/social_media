import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import Preloader from '../../common/Preloader/Preloader';
import defaultUserPhoto from '../../../assets/defaultUserPhoto.png'

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }
    else {
        return (
            <div className={s.container}>
                <span style={{fontSize: "46px", marginLeft: "14px"}}>{props.profile.fullName}</span>
                <div>
                    <img src={props.profile.photos.large ? props.profile.photos.large : defaultUserPhoto} alt=""/>
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
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
