import {PostsType} from "../components/Profile/MyPosts/MyPosts";
import {ProfilePropsType} from "../components/Profile/Profile";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type AddPostAT = {
    type: 'ADD-POST'
    newPostText: string
}

export type UpdateNewPostTextAT = {
    type: 'UPD-NEW-POST-TEXT'
    newText: string
}

export type SetUserProfileAT = {
    type: 'SET_USER_PROFILE'
    profile: any
}

export type SetStatusAT = {
    type: 'SET_STATUS'
    status: string
}

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 15},
        {id: 2, message: "It is my first post", likeCount: 30}
    ] as Array<PostsType>,
    newPostText: '',
    profile: null,
    status: ""
}

export type InitialStateType = typeof initialState
export type ActionAT = AddPostAT
    | UpdateNewPostTextAT
    | SetUserProfileAT
    | SetStatusAT

const profileReducer = (state: InitialStateType = initialState, action: ActionAT): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts,
                    {id: 7, message: action.newPostText, likeCount: 0}],
                newPostText: ''
            }
        case 'UPD-NEW-POST-TEXT' :
            return {...state, newPostText: action.newText}
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "SET_STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPostAC = (newPostText: string): AddPostAT => ({
    type: 'ADD-POST',
    newPostText: newPostText
})

export const updateNewPostTextAC = (newText: string): UpdateNewPostTextAT => ({
    type: 'UPD-NEW-POST-TEXT',
    newText: newText
})

export const setUserProfile = (profile: ProfilePropsType): SetUserProfileAT => ({
    type: 'SET_USER_PROFILE',
    profile: profile
})

export const setStatus = (status: string): SetStatusAT => ({
    type: 'SET_STATUS',
    status: status
})

export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch<ActionAT>) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}
export const getStatus = (userId: number) => {
    return (dispatch: Dispatch<ActionAT>) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data));
        })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ActionAT>) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0)
            dispatch(setStatus(status));
        })
    }
}

export default profileReducer;