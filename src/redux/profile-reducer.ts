import {PostsType} from "../components/Profile/MyPosts/MyPosts";
import {ProfilePropsType} from "../components/Profile/Profile";

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

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 15},
        {id: 2, message: "It is my first post", likeCount: 30}
    ] as Array<PostsType>,
    newPostText: '',
    profile: null
}

export type InitialStateType = typeof initialState
export type ActionAT = AddPostAT
    | UpdateNewPostTextAT
    | SetUserProfileAT

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

export default profileReducer;