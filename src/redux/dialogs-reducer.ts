import {ActionAT, MessagesPageType} from "./state";

export type AddMessageAT = {
    type: 'SEND-MESSAGE'
    newMessageText: string
}
export type UpdateNewMessageTextAT = {
    type: 'UPD-NEW-MESSAGE-TEXT'
    newMessage: string
}

const dialogsReducer = (state: MessagesPageType, action: ActionAT) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage = {
                id: 7,
                message: action.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = ''
            return state
        case 'UPD-NEW-MESSAGE-TEXT' :
            state.newMessageText = action.newMessage;
            return state
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