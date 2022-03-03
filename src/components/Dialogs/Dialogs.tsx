import React from 'react';
import s from "./Dialogs.module.css"
import Message from './Message/Message';
import DialogItem from "./DialogItem/DialogItem";

type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagesPropsType>
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

    const addMessage = () => {
        alert(newMessage.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessage}> </textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;