import React from 'react';
import s from "./Dialogs.module.css"
import Message from './Message/Message';
import DialogItem from "./DialogItem/DialogItem";
import {useFormik} from 'formik';
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagesPropsType>
    sendMessage: (newMessageText: string) => void
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

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

    const formik = useFormik({
        initialValues: {
            newMessageText: '',
        },
        onSubmit: values => {
            props.sendMessage(values.newMessageText);
            formik.resetForm();
        },
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            id="outlined-basic"
                            label="Enter your message"
                            variant="outlined"
                            {...formik.getFieldProps('newMessageText')}
                        />
                        <Button
                            type="submit"
                            variant="outlined"
                            endIcon={<SendIcon/>}
                            style={{maxWidth: '100px', maxHeight: '50px', minWidth: '40px', minHeight: '56px'}}>
                            Send
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;