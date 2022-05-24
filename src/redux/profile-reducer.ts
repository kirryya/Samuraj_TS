import {PostsType} from "../components/Profile/MyPosts/MyPosts";
import {ProfilePropsType} from "../components/Profile/Profile";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 15},
        {id: 2, message: "It is my first post", likeCount: 30}
    ] as Array<PostsType>,
    profile: null,
    status: ""
}
type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionAT): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts,
                    {id: 7, message: action.newPostText, likeCount: 0}]
            }
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "SET_STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

//actions
export const addPostAC = (newPostText: string): AddPostAT => ({
    type: 'ADD-POST',
    newPostText: newPostText
})

export const setUserProfile = (profile: ProfilePropsType): SetUserProfileAT => ({
    type: 'SET_USER_PROFILE',
    profile: profile
})

export const setStatus = (status: string): SetStatusAT => ({
    type: 'SET_STATUS',
    status: status
})

// thunks
export const getUserProfile = (userId: number) => (dispatch: Dispatch<ActionAT>) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}
export const getStatus = (userId: number) => (dispatch: Dispatch<ActionAT>) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch<ActionAT>) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0)
                dispatch(setStatus(status));
        })
}

//types
export type AddPostAT = {
    type: 'ADD-POST'
    newPostText: string
}

export type SetUserProfileAT = {
    type: 'SET_USER_PROFILE'
    profile: any
}

export type SetStatusAT = {
    type: 'SET_STATUS'
    status: string
}

export type ActionAT = AddPostAT
    | SetUserProfileAT
    | SetStatusAT

export default profileReducer;