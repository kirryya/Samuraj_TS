import profileReducer, {AddPostAT, UpdateNewPostTextAT} from "./profile-reducer";
import dialogsReducer, {AddMessageAT, UpdateNewMessageTextAT} from "./dialogs-reducer";

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

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type MessagesPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}


export type StoreType = {
    _state: StateType
    _onChange: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: AddPostAT | UpdateNewPostTextAT | AddMessageAT | UpdateNewMessageTextAT) => void
}

export type ActionAT = AddPostAT | UpdateNewPostTextAT | AddMessageAT | UpdateNewMessageTextAT


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likeCount: 15},
                {id: 2, message: "It is my first post", likeCount: 30}
            ],
            newPostText: ''
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
            ],
            newMessageText: ''
        }
    },
    _onChange() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._onChange = observer // паттерн observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._onChange()
    }
}

export default store;