import {createSelector} from "reselect";

const getFriendsSelector = (state) => {
    return state.navbar.friends
};
export const getFriendsS = createSelector(getFriendsSelector, (friends) => {
    return friends;
})
