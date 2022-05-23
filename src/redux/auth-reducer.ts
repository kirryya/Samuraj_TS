import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../api/api";
import {handleServerAppError, handleServerNetworkError} from "../components/common/Error-utils/error-utils";

let initialState = {
    data: {
        userId: null,
        email: null,
        login: null
    },
    isAuth: false,
    error: null
}

const authReducer = (state: InitialStateType = initialState, action: ActionAT): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data
            }
        case 'SET-IS-LOGGED-IN':
            return {...state, isAuth: action.value}
        case 'SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

// actions
export const setAuthUserData = (data: DataType): SetUserDataAT => ({
    type: "SET_USER_DATA",
    data
})
export const setIsLoggedInAC = (value: boolean) => ({
    type: 'SET-IS-LOGGED-IN',
    value
} as const)
export const setErrorAC = (error: string | null) => ({
    type: 'SET-ERROR', error
} as const)

//thunks
export const getAuthUserData = () => (dispatch: Dispatch<ActionAT>) => {
    authAPI.getAuth()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data))
                dispatch(setIsLoggedInAC(true))
            } else {
                handleServerAppError(data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionAT>) => {
    authAPI.login(data)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}

export const logoutTC = () => (dispatch: Dispatch<ActionAT>) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(false))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}

// types
export type InitialStateType = {
    data: {
        userId: null | number,
        email: null | string,
        login: null | string
    },
    isAuth: boolean,
    error: null | string

}
export type SetErrorAT = ReturnType<typeof setErrorAC>
export type ActionAT = ReturnType<typeof setIsLoggedInAC> | SetUserDataAT | SetErrorAT
export type SetUserDataAT = {
    type: 'SET_USER_DATA'
    data: DataType
}
export type DataType = {
    userId: number | null,
    email: string | null,
    login: string | null
}
export type AuthType = {
    resultCode: number
    messages: Array<string>,
    data: DataType
}

export default authReducer;