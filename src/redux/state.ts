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
    newPostText: string
}

type MessagesPageType = {
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

export type AddPostAT = {
    type: 'ADD-POST'
    newPostText: string
}

export type UpdateNewPostTextAT = {
    type: 'UPD-NEW-POST-TEXT'
    newText: string
}
export type AddMessageAT = {
    type: 'SEND-MESSAGE'
    newMessageText: string
}
export type UpdateNewMessageTextAT = {
    type: 'UPD-NEW-MESSAGE-TEXT'
    newMessage: string
}


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
    dispatch: function (action) {
        switch (action.type) {
            case 'ADD-POST':
                const newPost = {
                    id: 7,
                    message: action.newPostText,
                    likeCount: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = ''
                this._onChange()
                break
            case 'UPD-NEW-POST-TEXT' :
                this._state.profilePage.newPostText = action.newText;
                this._onChange()
                break
            case 'SEND-MESSAGE':
                const newMessage = {
                    id: 7,
                    message: action.newMessageText
                };
                this._state.messagesPage.messages.push(newMessage);
                this._state.messagesPage.newMessageText = ''
                this._onChange()
                break
            case 'UPD-NEW-MESSAGE-TEXT' :
                this._state.messagesPage.newMessageText = action.newMessage;
                this._onChange()
                break
            default:
                return this.getState()
        }
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
export const sendMessageAC = (newMessageText: string): AddMessageAT => ({
    type: "SEND-MESSAGE",
    newMessageText: newMessageText
})
export const updateNewMessageTextAC = (newMessage: string): UpdateNewMessageTextAT => ({
    type: 'UPD-NEW-MESSAGE-TEXT',
    newMessage: newMessage
})


export default store;