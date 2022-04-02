import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type mapDispatchToPropsType = {
    sendMessage: (newMessageText: string) => void
    onChangeMessage: (message: string) => void
}

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageText: string) => {
            dispatch(sendMessageAC(newMessageText))
        },
        onChangeMessage: (message: string) => {
            dispatch(updateNewMessageTextAC(message))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
