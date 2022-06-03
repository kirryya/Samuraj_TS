import {Dispatch} from "redux";
import {handleServerNetworkError} from "../components/common/Error-utils/error-utils";
import {getAuthUserData} from "./auth-reducer";

let initialState = {
    isInitialized: false,
    error: null
}

const authReducer = (state: InitialStateType = initialState, action: ActionAT): InitialStateType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {...state, isInitialized: true}
        case 'SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

// actions
export const initializedSuccessAC = () => ({
    type: "INITIALIZED-SUCCESS"
} as const)
export const setErrorAC = (error: string | null) => ({
    type: 'SET-ERROR', error
} as const)

//thunks
export const initializeAppTC = () => (dispatch: any): any => {
    getAuthUserData
        .then(() => {
            dispatch(initializedSuccessAC())
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}

// types
export type InitialStateType = {
    isInitialized: boolean,
    error: null | string

}
export type SetErrorAT = ReturnType<typeof setErrorAC>
export type ActionAT = ReturnType<typeof initializedSuccessAC> | SetErrorAT

export default authReducer;