import axios, {AxiosResponse} from "axios";
import {ProfileType} from "../components/Profile/Profile";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c351c090-ba85-40b0-b03b-a2b4e75fffe5"
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
        return instance.delete<{ userId: number }, AxiosResponse<ResponseType>>(`follow/${userId}`)
    },
    setFollow(userId: number) {
        return instance.post<{ userId: number }, AxiosResponse<ResponseType>>(`follow/${userId}`)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
    login(data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<ResponseType<{ userId: number }>>>('auth/login', data)
    },
    logout() {
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
    },
    savePhoto(photo: string) {
        const formData = new FormData()
        formData.append("image", photo)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    },
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

