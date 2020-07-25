import {createSelector} from "reselect";

const getProfileSelector = (state) => {
    return state.profilePage.profile
};
const getIsFetchedSelector = (state) => {
    return state.profilePage.isFetched
};
const getStatusSelector = (state) => {
    return state.profilePage.status
};

// S - mean Selector
export const getProfileS = createSelector(getProfileSelector, (profile) => {
    // this is place for logic
    // filter(), map(), reduce(), Math, big arrays....
    return profile;
});

export const getIsFetchedS = createSelector(getIsFetchedSelector, (IsFetched) => {
    return IsFetched;
});

export const getStatusS = createSelector(getStatusSelector, (status) => {
    return status;
});

// export const getAnotherS = createSelector(getStatusSelector, xSelector, ySelector, zSelector, (status, x, y, z) => {
//logic with params
//     return ???;
// });
