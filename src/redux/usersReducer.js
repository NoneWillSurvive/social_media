let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 3,
    currentPage: 1,
    isFetched: false // false - нет загрузки (картинки тоже) , true - загрузка + картинка
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW' :
            return {
                ...state,
                users: state.users.map( elem => {
                    if (elem.id === action.userID){
                        return { ...elem, followed:true }
                    }
                    return elem;
                })
            };

        case 'UNFOLLOW' :
            return {
                ...state,
                users: state.users.map(elem => {
                    if (elem.id === action.userID) {
                        return {...elem, followed: false}
                    }
                    return elem;
                })
            };

        case 'SET-USERS' :
            return { ...state, users: [...action.users] };

        case 'SET-TOTAL-USERS-COUNT' :
            return { ...state, totalUsersCount: action.totalUsersCount };

        case 'SET-CURRENT-PAGE' :
            return { ...state, currentPage: action.currentPage };

        case 'TOGGLE-IS-FETCHED' :
            return { ...state, isFetched: action.newFetchState };

        default :
            return state;
    }
};

export default usersReducer;

export const follow = (userID) => ({type: 'FOLLOW', userID});
export const unfollow = (userID) => ({type: 'UNFOLLOW', userID});
export const setUsers = (users) => ({type: 'SET-USERS', users});
export const setTotalUsersCount = (count) => ({type: 'SET-TOTAL-USERS-COUNT', totalUsersCount: count});
export const setCurrentPage = (count) => ({type: 'SET-CURRENT-PAGE', currentPage: count});
export const toggleIsFetched = (newFetchState) => ({type: 'TOGGLE-IS-FETCHED', newFetchState});
