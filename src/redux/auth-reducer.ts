import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../api/api";

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

let initialState = {
    data: {
        userId: null,
        email: null,
        login: null
    },
    isAuth: false,
}

const authReducer = (state: InitialStateType = initialState, action: ActionAT): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isAuth: action.value}
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
    type: 'login/SET-IS-LOGGED-IN',
    value
} as const)

//thunks
export const getAuthUserData = () => {
    return (dispatch: Dispatch<ActionAT>) => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data))
                }
            });
    }
}

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionAT>) => {
    authAPI.login(data)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
            }
        })
}

export const logoutTC = () => (dispatch: Dispatch<ActionAT>) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(false))
            }
        })
}

// types
export type InitialStateType = typeof initialState
export type ActionAT = ReturnType<typeof setIsLoggedInAC> | SetUserDataAT

export default authReducer;