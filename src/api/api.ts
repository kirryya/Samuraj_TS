import axios, { AxiosResponse } from "axios";

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
    },
    login (data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<ResponseType<{ userId: number }>>>('auth/login', data)
    },
    logout () {
        return instance.delete<ResponseType>('auth/login')
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

//types
export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
export type MeResponseType = {
    id: number
    email: string
    login: string
}
