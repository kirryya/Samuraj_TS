import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrei"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Masha"},
        {id: 5, name: "Valera"}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;