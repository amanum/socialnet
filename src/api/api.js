import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '8969e7b0-196a-4db1-9bd6-a5a474c9bf14'
    }
})

export const userAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowFriend (userId) {
        return axiosInstance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    followFriend (userId) {
        return axiosInstance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    watchProfile (userId) {
        return profileAPI.getUserProfile(userId)
    }
}

export const authAPI = {
    me () {
        return axiosInstance.get(`auth/me`)
            .then(response => response.data)
    },
    login (email, password, rememberMe = false) {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout () {
        return axiosInstance.delete(`auth/login`)
            .then(response => response.data)
    },
}

export const profileAPI = {
    getUserProfile(userId) {
        return axiosInstance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getUserStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateUserStatus(status) {
        return axiosInstance.put(`profile/status/`, {status: status})
            .then(response => response.data)
    }
}