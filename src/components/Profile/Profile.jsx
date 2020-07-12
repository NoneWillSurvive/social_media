import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/myPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
