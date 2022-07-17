import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import style from './ProfileStatusWithHooks.module.css'

type ProfilePropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfilePropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            deactivateEditMode()
        }
    }

    return (
        <div className={style.main}>
            <span><b>Status:</b></span>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode} className={style.status}>{props.status || "------"} </span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           onKeyPress={onKeyPressHandler}
                           value={status}/>
                </div>
            }
        </div>
    );
}
