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
    isAuth: false
}

export type InitialStateType = typeof initialState
export type ActionAT = SetUserDataAT

const authReducer = (state: InitialStateType = initialState, action: ActionAT): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: DataType): SetUserDataAT => ({
    type: "SET_USER_DATA",
    data: data
})

export default authReducer;