import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
};
export const getUsersS = createSelector(getUsersSelector, (user) => {
    // this is place for logic
    // filter(), map(), reduce(), Math, big arrays....
    return user;
});


const totalUserCountSelector = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getTotalUserCountS = createSelector(totalUserCountSelector, (usersCount) => {
    return usersCount;
});


const pageSizeSelector = (state) => {
    return state.usersPage.pageSize;
};
export const getPageSizeS = createSelector(pageSizeSelector, (pageSize) => {
    return pageSize;
});


const currentPageSelector = (state) => {
    return state.usersPage.currentPage;
};
export const getCurrentPageS = createSelector(currentPageSelector, (currentPage) => {
    return currentPage;
});


const isFetchedUserSelector = (state) => {
    return state.usersPage.isFetched;
};
export const getIsFetchedUserS = createSelector(isFetchedUserSelector, (isFetched) => {
    return isFetched;
});


const isFollowingInProgressSelector = (state) => {
    return state.usersPage.isFollowingInProgress;
};
export const getIsFollowingInProgressS = createSelector(isFollowingInProgressSelector, (isFoolowing) => {
    return isFoolowing;
});

