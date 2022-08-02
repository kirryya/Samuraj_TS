import {PostsType} from "../components/Profile/MyPosts/MyPosts";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {PhotosType, ProfileType} from "../components/Profile/Profile";
import {handleServerNetworkError} from "../components/common/Error-utils/error-utils";
import {SetErrorAT} from "./auth-reducer";
import {setErrorAC} from "./auth-reducer";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 15},
        {id: 2, message: "It is my first post", likeCount: 30}
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: "",
    isLoading: false,
}
type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionAT): InitialStateType => {
    switch (action.type) {
        case 'PROFILE/ADD-POST':
            return {...state, posts: [...state.posts, {id: 7, message: action.newPostText, likeCount: 0}]}
        case 'PROFILE/SET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'PROFILE/SET_STATUS':
            return {...state, status: action.status}
        case 'PROFILE/DELETE-POST':
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case 'PROFILE/SET_AVATAR':
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        case 'PROFILE/SET_LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

//actions
export const addPostAC = (newPostText: string) => ({
    type: 'PROFILE/ADD-POST', newPostText
} as const)

export const setUserProfile = (profile: ProfileType) => ({
    type: 'PROFILE/SET_USER_PROFILE', profile
} as const)

export const setStatus = (status: string) => ({
    type: 'PROFILE/SET_STATUS', status
} as const)

export const deletePostAC = (postId: number) => ({
    type: 'PROFILE/DELETE-POST',
    postId
} as const)

export const setAvatar = (photos: PhotosType) => ({
    type: 'PROFILE/SET_AVATAR',
    photos
} as const)

export const setLoading = (isLoading: boolean) => ({
    type: 'PROFILE/SET_LOADING',
    isLoading
} as const)

// thunks
export const getUserProfile = (userId: number) => async (dispatch: Dispatch<ActionAT>) => {
    try {
        const data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data));
    } catch (error) {
        if (error instanceof Error) {
            handleServerNetworkError(error, dispatch)
        }
    }
}
export const getStatus = (userId: number) => async (dispatch: Dispatch<ActionAT>) => {
    try {
        let data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data));
    } catch (error) {
        if (error instanceof Error) {
            handleServerNetworkError(error, dispatch)
        }
    }
}
export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionAT>) => {
    try {
        dispatch(setLoading(true))
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0)
            dispatch(setStatus(status));
    } catch (error) {
        if (error instanceof Error) {
            handleServerNetworkError(error, dispatch)
        }
    } finally {
        dispatch(setLoading(false))
    }
}

export const savePhoto = (photo: string) => async (dispatch: Dispatch<ActionAT>) => {
    try {
        dispatch(setLoading(true))
        let response = await profileAPI.savePhoto(photo)
        if (response.data.resultCode === 0)
            dispatch(setAvatar(response.data.data.photos));
    } catch (error) {
        if (error instanceof Error) {
            handleServerNetworkError(error, dispatch)
        }
    } finally {
        dispatch(setLoading(false))
    }
}

export const updateProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    try {
        const userId: number = getState().auth.data.id
        dispatch(setLoading(true))
        const response = await profileAPI.updateProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId))
        } else {
            dispatch(setErrorAC(response.data.messages[0]))
        }
    } catch (error) {
        if (error instanceof Error) {
            handleServerNetworkError(error, dispatch)
        }
    } finally {
        dispatch(setLoading(false))
    }
}

//types
export type ActionAT = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setAvatar>
    | ReturnType<typeof setLoading>
    | SetErrorAT

export default profileReducer;