import {Dispatch} from 'redux';
import {authAPI, LoginParamsType, securityAPI} from '../api/api';
import {handleServerAppError, handleServerNetworkError} from '../components/common/Error-utils/error-utils';

let initialState = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false,
    error: null,
    captcha: null,
}

const authReducer = (state: InitialStateType = initialState, action: ActionAT): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA':
            return {...state, ...action.data}
        case 'AUTH/SET_IS_LOGGED_IN':
            return {...state, isAuth: action.value}
        case 'AUTH/SET_ERROR':
            return {...state, error: action.error}
        case "AUTH/GET_CAPTCHA_URL_SUCCESS":
            return {...state, captcha: action.captcha}
        default:
            return state
    }
}

// actions
export const setAuthUserData = (data: DataType) => ({
    type: 'AUTH/SET_USER_DATA',
    data
} as const)

export const getCaptchaUrlSuccess = (captcha: string | null) => ({
    type: 'AUTH/GET_CAPTCHA_URL_SUCCESS',
    captcha
} as const)

export const setIsLoggedInAC = (value: boolean) => ({
    type: 'AUTH/SET_IS_LOGGED_IN',
    value
} as const)
export const setErrorAC = (error: string | null) => ({
    type: 'AUTH/SET_ERROR', error
} as const)

//thunks
export const getAuthUserData = () => async (dispatch: Dispatch<ActionAT>) => {
    try {
        let res = await authAPI.getAuth()
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(res.data))
            dispatch(setIsLoggedInAC(true))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    } catch (error) {
        if (error instanceof Error) {
            handleServerNetworkError(error, dispatch)
        }
    }
}

export const loginTC = (data: LoginParamsType) => async (dispatch: Dispatch<ActionAT | any>) => {
    try {
        let res = await authAPI.login(data)
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if(res.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            handleServerAppError(res.data, dispatch)
        }
    } catch (error) {
        if (error instanceof Error) {
            handleServerNetworkError(error, dispatch)
        }
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch<ActionAT | any>) => {
    try {
        let res = await securityAPI.getCaptchaUrl()
        if (res.data.url) {
            dispatch(getCaptchaUrlSuccess(res.data.url))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    } catch (error) {
        if (error instanceof Error) {
            handleServerNetworkError(error, dispatch)
        }
    }
}

export const logoutTC = () => async (dispatch: Dispatch<ActionAT>) => {
    try {
        let res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData({
                id: null,
                email: null,
                login: null
            }))
            dispatch(setIsLoggedInAC(false))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    } catch (error) {
        if (error instanceof Error) {
            handleServerNetworkError(error, dispatch)
        }
    }
}

// types
export type InitialStateType = {
    data: {
        id: null | number,
        email: null | string,
        login: null | string
    },
    isAuth: boolean,
    error: null | string
    captcha: null | string
}
export type SetErrorAT = ReturnType<typeof setErrorAC>
export type ActionAT = ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof getCaptchaUrlSuccess>
    | SetErrorAT

export type DataType = {
    id: number | null,
    email: string | null,
    login: string | null
}
export type AuthType = {
    resultCode: number
    messages: Array<string>,
    data: DataType
}

export default authReducer;