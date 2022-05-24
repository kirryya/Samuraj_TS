import {DialogItemPropsType, MessagesPropsType} from "../components/Dialogs/Dialogs";

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
    ] as Array<MessagesPropsType>
}

const dialogsReducer = (state: InitialStateType = initialState, action: ActionAT): InitialStateType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            return {
                ...state,
                messages: [...state.messages,
                    {id: 7, message: action.newMessageText}
                ]
            }
        default:
            return state
    }
}

export const sendMessageAC = (newMessageText: string) => ({
    type: "SEND-MESSAGE",
    newMessageText: newMessageText
} as const)

//types
export type InitialStateType = typeof initialState
export type ActionAT = ReturnType<typeof sendMessageAC>

export default dialogsReducer;