import {handleServerNetworkError} from "../components/common/Error-utils/error-utils";
import {getAuthUserData} from "./auth-reducer";
import {AppStateType} from "./redux-store";
import {AnyAction} from "redux";
import {ThunkAction} from "redux-thunk";


let initialState = {
    isInitialized: false,
    error: null
}

const appReducer = (state: InitialStateType = initialState, action: ActionAT): InitialStateType => {
    switch (action.type) {
        case 'APP/INITIALIZED-SUCCESS':
            return {...state, isInitialized: true}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

// actions
export const initializedSuccessAC = () => ({
    type: 'APP/INITIALIZED-SUCCESS'
} as const)
export const setErrorAC = (error: string | null) => ({
    type: 'APP/SET-ERROR', error
} as const)

//thunks
export const initializeAppTC = (): ThunkAction<void, AppStateType, unknown, AnyAction> =>
    (dispatch) => {
        dispatch(getAuthUserData())
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


export default appReducer;