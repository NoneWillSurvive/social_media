import {createSelector} from "reselect";

const getAuthId = (state) => {
    return state.auth.id
};
export const getAuthIdS = createSelector(getAuthId, (id)=>{
    return id;
});

const getIsLogined = (state) => {
    return state.auth.isLogined
};
export const getIsLoginedS = createSelector(getIsLogined, (isLogined)=>{
    return isLogined;
});

const getLogin = (state) => {
    return state.auth.login
};
export const getLoginS = createSelector(getLogin, (login) => {
    return login;
});

const getMiniAvatar = (state) => {
    return state.auth.miniAvatar;
};
export const getMiniAvatarS = createSelector(getMiniAvatar, (src)=>{
    return src;
});

const getLookingForAJob = (state) => {
    return state.auth.lookingForAJob;
};
export const getLookingForAJobS = createSelector(getLookingForAJob, (lookingForAJob) =>{
    return lookingForAJob;
});
