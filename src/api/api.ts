import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "1abd1a35-16de-4573-8ef8-3e38ce7a3356"
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
    },
    setFollow(userId: number) {
        return instance.post(`follow/${userId}`)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userID: number) {
        return instance.get(`profile/` + userID)
            .then(response => response.data);
    },
    getStatus(userID: number) {
        return instance.get(`profile/status/${userID}`)
            .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }
}
