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
    addPost: () => void
    updateNewPostText: (newText: string) => void
    dispatch: (action: AddPostAT | UpdateNewPostTextAT) => void
}

export type AddPostAT = {
    type: 'ADD-POST'
    newPostText: string
}

export type UpdateNewPostTextAT = {
    type: 'UPD-NEW-POST-TEXT'
    newText: string
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
            ]
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
    addPost() {
        const newPost = {
            id: 7,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._onChange()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._onChange()
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
            default:
                return store
        }
    }
}


export default store;