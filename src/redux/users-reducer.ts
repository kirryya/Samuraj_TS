export type FollowAT = {
    type: 'FOLLOW'
    userId: number
}

export type UnfollowAT = {
    type: 'UNFOLLOW'
    userId: number
}

export type setUsersAT = {
    type: 'SET_USERS'
    users: Array<UserType>
}

export type UserType = {
    id: number
    photoURL:string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

let initialState = {
    users: [] as Array<UserType>
}

export type InitialStateType = typeof initialState
export type ActionAT = FollowAT | UnfollowAT | setUsersAT

const usersReducer = (state: InitialStateType = initialState, action: ActionAT): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? ({...u, followed: true}) : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? ({...u, followed: false}) : u)
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users] }
        default:
            return state
    }
}

export const followAC = (userId: number): FollowAT => ({
    type: 'FOLLOW',
    userId: userId,
})

export const UnfollowAC = (userId: number): UnfollowAT => ({
    type: 'UNFOLLOW',
    userId: userId
})

export const setUsersAC = (users: Array<UserType>): setUsersAT => ({
    type: 'SET_USERS',
    users: users
})

export default usersReducer;