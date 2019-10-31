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
        return axiosInstance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    me () {
        return axiosInstance.get(`auth/me`)
            .then(response => response.data)
    },
}