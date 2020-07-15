import * as axios from 'axios';

const instance = axios.create({
    baseURL : "https://social-network.samuraijs.com/api/1.0/",
     withCredentials : true,
    headers : {
        "API-KEY" : "edcb5cd1-c8cb-44cb-9cc6-a7aebc6cec65"
    }
});

export const userAPI = {

    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(
            response => response.data
        );
    },

    follow(userId) {
        return instance.post(`follow/${userId}`);
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }

};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(
            response => response.data
        )
    }
};

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`).then(
            response => response.data
        )
    }
};
