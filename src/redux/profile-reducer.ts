import {ActionAT,ProfilePageType,} from "./store";

export type AddPostAT = {
    type: 'ADD-POST'
    newPostText: string
}

export type UpdateNewPostTextAT = {
    type: 'UPD-NEW-POST-TEXT'
    newText: string
}

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 15},
        {id: 2, message: "It is my first post", likeCount: 30}
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState , action: ActionAT) => {
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