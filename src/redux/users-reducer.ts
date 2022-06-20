import {followAPI, usersAPI} from "../api/api";
import {Dispatch} from "react";

let initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[]
}

export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionAT): InitialStateType => {
    switch (action.type) {
        case 'USERS/FOLLOW':
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? ({...u, followed: true}) : u)
            }
        case 'USERS/UNFOLLOW':
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? ({...u, followed: false}) : u)
            }
        case 'USERS/SET_USERS':
            return {...state, users: action.users}
        case 'USERS/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'USERS/SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'USERS/TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'USERS/TOGGLE_FOLLOWING_PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

//actions
export const follow = (userId: number) => ({
    type: 'USERS/FOLLOW', userId,
} as const)

export const unfollow = (userId: number) => ({
    type: 'USERS/UNFOLLOW', userId
} as const)

export const setUsers = (users: UserType[]) => ({
    type: 'USERS/SET_USERS', users
} as const)

export const setCurrentPage = (currentPage: number) => ({
    type: 'USERS/SET_CURRENT_PAGE', currentPage
} as const)

export const setTotalUsersCount = (totalCount: number) => ({
    type: 'USERS/SET_TOTAL_USERS_COUNT', totalCount
} as const)

export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'USERS/TOGGLE_IS_FETCHING', isFetching
} as const)

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'USERS/TOGGLE_FOLLOWING_PROGRESS', isFetching, userId
} as const)

// thunks
export const requestUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionAT>) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const followUser = (userId: number) => {
    return (dispatch: Dispatch<ActionAT>) => {
        dispatch(toggleFollowingProgress(true, userId))
        followAPI.setUnfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        });
    }
}

export const unfollowUser = (userId: number) => {
    return (dispatch: Dispatch<ActionAT>) => {
        dispatch(toggleFollowingProgress(true, userId))
        followAPI.setFollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        });
    }
}

//types
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
export type ActionAT = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export default usersReducer;