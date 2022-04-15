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

export type setCurrentPageAT = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}

export type setTotalUsersCountAT = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalCount: number
}

export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export type InitialStateType = typeof initialState
export type ActionAT = FollowAT | UnfollowAT | setUsersAT | setCurrentPageAT | setTotalUsersCountAT

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
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalCount}
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

export const setCurrentPageAC = (currentPage: number): setCurrentPageAT => ({
    type: 'SET_CURRENT_PAGE',
    currentPage: currentPage
})
export const setTotalUsersCountAC = (totalCount: number): setTotalUsersCountAT => ({
    type: 'SET_TOTAL_USERS_COUNT',
    totalCount: totalCount
})

export default usersReducer;