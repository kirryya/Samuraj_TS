import {Dispatch} from "redux";
import {ResponseType} from "../../../api/api"
import {setErrorAC, SetErrorAT} from "../../../redux/auth-reducer";


export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch<SetErrorAT>) => {
    if (data.messages.length) {
       dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some error occurred'))
    }
   /* dispatch(setAppStatusAC('failed'))*/
}

export const handleServerNetworkError = (error: {message: string}, dispatch: Dispatch<SetErrorAT>) => {
    dispatch(setErrorAC(error.message ? error.message : 'Some error occurred'))
    /*dispatch(setAppStatusAC('failed'))*/
}
