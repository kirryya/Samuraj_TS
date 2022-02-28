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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name={"Dimych"}/>
                <DialogItem id={2} name={"Andrei"}/>
                <DialogItem id={3} name={"Sveta"}/>
                <DialogItem id={4} name={"Sasha"}/>
                <DialogItem id={5} name={"Masha"}/>
                <DialogItem id={6} name={"Valera"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How are you?"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
            </div>
        </div>
    );
};

export default Dialogs;