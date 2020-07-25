import {authAPI} from "../api/api";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    isInitialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED :
            return {
                ...state,
                isInitialized: true
            }
        default: return {...state}
    }
};

export default appReducer;

const initializedSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    authAPI.getAuthMe().then(data => {
        if(data.resultCode === 0) {
            dispatch(initializedSuccess());
        }
    })
}
