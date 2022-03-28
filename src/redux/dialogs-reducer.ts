import {AddMessageAT, MessagesPageType, UpdateNewMessageTextAT} from "./state";

const dialogsReducer = (state: MessagesPageType, action: AddMessageAT | UpdateNewMessageTextAT) => {
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

export default dialogsReducer;