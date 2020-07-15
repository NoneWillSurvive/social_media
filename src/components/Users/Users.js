import React from 'react';
import s from './Users.module.css';
import defaultUserPhoto from '../../assets/defaultUserPhoto.png';
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let onClickChanged = (p) => {
        if (p === "__back..") {
            props.onBackSkip();
        } else {
            if (p === "__forward..") {
                props.onNextSkip();
            } else {
                props.onPageChanged(p);
            }
        }
    };

    let print = (p) => {
        if (p === "__back.." || p === "__forward..") {
            return ".."
        } else return p;
    };

    let createPagination = () => {
        let pages = [];
        let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let currentPage = props.currentPage;
        let totalUsersCount = props.totalUsersCount;

        pages.push(1);

        // если  < 1 2 3! 4 ... 100 >
        if (currentPage < 4) {
            pages.push(2);
            pages.push(3);
            pages.push(4);
            pages.push("__forward..");
            pages.push(pageCount);
        } else {
            if (currentPage > pageCount - 3) {
                pages.push("__back..");
                pages.push(pageCount - 3);
                pages.push(pageCount - 2);
                pages.push(pageCount - 1);
                pages.push(pageCount);
            } else {
                pages.push("__back..");
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push(currentPage + 1);
                pages.push("__forward..");
                pages.push(pageCount);
            }
        }

        return pages.map(p => {
            return <div className={p === props.currentPage && s.selected}
                        onClick={() => onClickChanged(p)}>{print(p)}</div>
        })

    };

    return (
        <div className={s.container}>
            <h1>Users</h1>

            <form action="#" className={s.search}>
                <input type="text"/>
                <input type="button" value='search'/>
            </form>

            <div className={s.pagination}>
                <div onClick={props.onPreviousPage}>{"<"}</div>
                {createPagination()}
                <div onClick={(e) => {
                    props.onNextPage()
                }}>{">"}</div>
            </div>

            {props.users.map(user =>
                <div className={s.user}>
                    <NavLink className={s.user__a} to={`/profile/${user.id}`}> <img
                        src={user.photos.small ? user.photos.small : defaultUserPhoto}
                        alt="photo" className={s.user__image}/>
                    </NavLink>

                    {
                        user.followed ?
                            <button
                                className={
                                    props.isFollowingInProgress.some(el => el === user.id) ?
                                        s.user__followButton__disable : s.user__followButton
                                }

                                disabled={props.isFollowingInProgress.some(el => el === user.id)}

                                onClick={() => {
                                    props.unfollow(user.id);
                                }}>Unfollow</button> :
                            <button
                                className={
                                    props.isFollowingInProgress.some(el => el === user.id) ?
                                        s.user__followButton__disable : s.user__followButton
                                }

                                disabled={props.isFollowingInProgress.some(el => el === user.id)}

                                onClick={() => {
                                    props.follow(user.id);
                                }}>Follow</button>
                    }

                    <div className={s.description}>
                        <div className={s.description__fullName}>{user.name}</div>
                        <div className={s.description__status}>{user.status}</div>
                        <div className={s.description__city}>
                            user.location.city
                        </div>
                        <div className={s.description__country}>
                            user.location.country
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

};

export default Users;
