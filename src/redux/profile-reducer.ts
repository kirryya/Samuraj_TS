import {ActionAT,ProfilePageType,} from "./state";

export type AddPostAT = {
    type: 'ADD-POST'
    newPostText: string
}

export type UpdateNewPostTextAT = {
    type: 'UPD-NEW-POST-TEXT'
    newText: string
}

const profileReducer = (state: ProfilePageType, action: ActionAT) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: 7,
                message: action.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = ''
            return state
        case 'UPD-NEW-POST-TEXT' :
            state.newPostText = action.newText;
            return state
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

export default profileReducer;