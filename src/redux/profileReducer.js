import {authAPI, profileAPI} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const ADD_POST = 'ADD_POST';
const UPDATE_POST_MESSAGE = 'UPDATE_POST_MESSAGE';
const TOGGLE_IS_FETCHED = 'TOGGLE_IS_FETCHED';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 223}
    ],
    newPostText: '',
    isFetched: false,
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let newId = state.posts.length + 1;
            let newPost = {
                id: newId,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_POST_MESSAGE : {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_STATUS : {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }
        case TOGGLE_IS_FETCHED :
            return {...state, isFetched: action.newFetchState};
        default :
            return state;
    }
};

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostMessageActionCreator = (newText) =>
    ({type: UPDATE_POST_MESSAGE, newText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const toggleIsFetched = (newFetchState) => ({type: TOGGLE_IS_FETCHED, newFetchState});

export const getMyProfile = () => {
    return (dispatch) => {
        dispatch(toggleIsFetched(true));
        authAPI.getAuthMe().then(data => {
            debugger
            if (data.resultCode === 0) {
                profileAPI.getProfile(data.data.id).then(
                    data => {
                        dispatch(setUserProfile(data));
                        dispatch(toggleIsFetched(false));
                    }
                )
            } else {
                dispatch(toggleIsFetched(false));
            }
        })
    }
};
export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetched(true));
        profileAPI.getProfile(userId).then(data => {
                dispatch(setUserProfile(data));
                dispatch(toggleIsFetched(false));
            }
        );
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
                dispatch(setStatus(data));
            }
        );
    }
}

export const getMyStatus = () => {
    return (dispatch) => {
        authAPI.getAuthMe().then(data => {
            if(data !== 0) {
                profileAPI.getStatus(data.data.id).then(
                    data => {
                        dispatch(setStatus(data));
                    }
                )
            }
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            }
        );
    }
}
