import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/myPostsContainer";
import {NavLink} from "react-router-dom";

const Profile = (props) => {

    if(props.isLogined){
        return (
            <div className={s.content}>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer />
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
        )
    }

}

export default Profile;
