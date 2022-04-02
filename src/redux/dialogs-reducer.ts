import {DialogItemPropsType, MessagesPropsType} from "../components/Dialogs/Dialogs";

export type AddMessageAT = {
    type: 'SEND-MESSAGE'
    newMessageText: string
}
export type UpdateNewMessageTextAT = {
    type: 'UPD-NEW-MESSAGE-TEXT'
    newMessage: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrei"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Masha"},
        {id: 6, name: "Valera"}
    ] as Array<DialogItemPropsType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ] as Array<MessagesPropsType>,
    newMessageText: ''
}

export type InitialStateType = typeof initialState
export type ActionAT = AddMessageAT | UpdateNewMessageTextAT


const dialogsReducer = (state: InitialStateType = initialState, action: ActionAT): InitialStateType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage = {
                id: 7,
                message: action.newMessageText
            };
            state.newMessageText = ''
            return {...state, messages:[...state.messages, newMessage]}
        case 'UPD-NEW-MESSAGE-TEXT' :
            return {...state, newMessageText: action.newMessage}
        default:
            return state
    }
}

export const sendMessageAC = (newMessageText: string): AddMessageAT => ({
    type: "SEND-MESSAGE",
    newMessageText: newMessageText
})
export const updateNewMessageTextAC = (newMessage: string): UpdateNewMessageTextAT => ({
    type: 'UPD-NEW-MESSAGE-TEXT',
    newMessage: newMessage
})


export default dialogsReducer;