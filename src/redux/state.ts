import {rerenderEntireTree} from "../render";

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

type PostType = {
    id: number
    message: string
    likeCount: number
}

type ProfilePageType = {
    posts: Array<PostType>
}

type MessagesPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}


let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likeCount: 15},
            {id: 2, message: "It is my first post", likeCount: 30}
        ]
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrei"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Masha"},
            {id: 6, name: "Valera"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"}
        ]
    }
}

export const addPost = (postMessage: string) => {
    const newPost: PostType = {
        id: 7,
        message: postMessage,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state;