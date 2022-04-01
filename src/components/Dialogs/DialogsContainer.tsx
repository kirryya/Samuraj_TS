import React from 'react';
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {ReduxStoreType} from "../../redux/redux-store";

type DialogsContainerPropsType = {
    store: ReduxStoreType
}

const DialogsContainer = (props: DialogsContainerPropsType) => {


    const sendMessageCallback = (newMessageText: string) => {
        props.store.dispatch(sendMessageAC(newMessageText))
    }

    const onChangeMessageHandler = (message: string) => {
        props.store.dispatch(updateNewMessageTextAC(message))
    }

    return (<Dialogs
            dialogs={props.store.getState().messagesPage.dialogs}
            messages={props.store.getState().messagesPage.messages}
            newMessageText={props.store.getState().messagesPage.newMessageText}
            sendMessage={sendMessageCallback}
            onChangeMessage={onChangeMessageHandler}
        />
    );
};

export default DialogsContainer;
