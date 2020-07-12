const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_DATA_INFO = 'SET_USER_DATA_INFO';

let initialState = {
    id: null,
    email: null,
    login: null,
    isLogined: false,
    miniAvatar : null,
    lookingJob : false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.authData,
                // в аусДата будут методы , которые перезатрут данные из state
                isLogined: true
            };
        case SET_USER_DATA_INFO :
            return {
                ...state,
                // в аусДата будут методы , которые перезатрут данные из state
                miniAvatar: action.image,
                lookingJob: action.lookingJob
            };
        default : return state;
    }
};


export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, authData:{id, email, login}});
export const setUserDataImage = (image, lookingJob) => ({ type: SET_USER_DATA_INFO, image, lookingJob});

export default authReducer;
