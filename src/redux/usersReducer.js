import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHED = 'TOGGLE_IS_FETCHED';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 3,
    currentPage: 1,
    isFetched: false, // false - нет загрузки (картинки тоже) , true - загрузка + картинка
    isFollowingInProgress: [] // false - нет загрузки (картинки тоже) , true - загрузка + картинка
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(elem => {
                    if (elem.id === action.userID) {
                        return {...elem, followed: true}
                    }
                    return elem;
                })
            };

        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(elem => {
                    if (elem.id === action.userID) {
                        return {...elem, followed: false}
                    }
                    return elem;
                })
            };

        case SET_USERS :
            return {...state, users: [...action.users]};

        case SET_TOTAL_USERS_COUNT :
            return {...state, totalUsersCount: action.totalUsersCount};

        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.currentPage};

        case TOGGLE_IS_FETCHED :
            return {...state, isFetched: action.newFetchState};

        case TOGGLE_FOLLOWING_PROGRESS :
            return (
                action.stateProgress
                    ? {...state, isFollowingInProgress: [...state.isFollowingInProgress, action.id]}
                    : {...state, isFollowingInProgress: state.isFollowingInProgress.filter(id => id != action.id)}
            );

        default :
            return state;
    }
};

export default usersReducer;

export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: count});
export const setCurrentPage = (count) => ({type: SET_CURRENT_PAGE, currentPage: count});
export const toggleIsFetched = (newFetchState) => ({type: TOGGLE_IS_FETCHED, newFetchState});
export const toggleFollowingProgress = (stateProgress, id) => ({type: TOGGLE_FOLLOWING_PROGRESS, stateProgress, id});

// thunk action creators

export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetched(true));
        userAPI.getUsers(pageSize, currentPage).then(
            data => {
                dispatch(toggleIsFetched(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
};
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.unfollow(userId).then(
            response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                    dispatch(toggleFollowingProgress(false, userId));
                }
            }
        )
    }
};
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.follow(userId).then(
            response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                    dispatch(toggleFollowingProgress(false, userId));
                }
            }
        )
    }
};
