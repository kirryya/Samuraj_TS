import React from 'react';
import s from "./Dialogs.module.css"
import Message from './Message/Message';
import DialogItem from "./DialogItem/DialogItem";
import {addMessageAC, AddMessageAT, updateNewMessageTextAC, UpdateNewMessageTextAT,} from "../../redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagesPropsType>
    newMessageText: string
    dispatch: (action: | AddMessageAT | UpdateNewMessageTextAT) => void
}

export type DialogItemPropsType = {
    id: number
    name: string
}
export type MessagesPropsType = {
    id: number
    message: string
}


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    let newMessage = React.createRef<HTMLTextAreaElement>()

    const addMessageCallback = () => {
        let text = newMessage.current
        if (text) {
            props.dispatch(addMessageAC(props.newMessageText))
        }
    }

    const onChangeMessageHandler = () => {
        let text = newMessage.current
        if (text)
            props.dispatch(updateNewMessageTextAC(text.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessage} onChange={onChangeMessageHandler} value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessageCallback}>Add Message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;