import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "4e65e492-b016-4de4-8bdf-5761c6ec08a7",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then((response) => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then((response) => response.data);
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`).then((response) => response.data);
    },
    
};

export const authAPI = {
    getMeAuth(){
        return instance.get(`auth/me`).then((response) => response.data);
    }
}