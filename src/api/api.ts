import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "54ba2779-6931-43f7-a5a4-e5034dbc18fa"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

export const followAPI = {
    setUnfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    setFollow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userID: string) {
        return instance.get(`profile/` + userID)
            .then(response => response.data);
    }
}
