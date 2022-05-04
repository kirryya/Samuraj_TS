import {usersAPI} from "../api/api";
import {Dispatch} from "react";

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

export type toggleFollowingProgressAT = {
    type: 'TOGGLE_FOLLOWING_PROGRESS'
    isFetching: boolean
    userId: number
}

export type toggleIsFetchingAT = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
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
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

export type InitialStateType = typeof initialState
export type ActionAT = FollowAT
    | UnfollowAT
    | setUsersAT
    | setCurrentPageAT
    | setTotalUsersCountAT
    | toggleIsFetchingAT
    | toggleFollowingProgressAT

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
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId: number): FollowAT => ({
    type: 'FOLLOW',
    userId: userId,
})

export const unfollow = (userId: number): UnfollowAT => ({
    type: 'UNFOLLOW',
    userId: userId
})

export const setUsers = (users: Array<UserType>): setUsersAT => ({
    type: 'SET_USERS',
    users: users
})

export const setCurrentPage = (currentPage: number): setCurrentPageAT => ({
    type: 'SET_CURRENT_PAGE',
    currentPage: currentPage
})

export const setTotalUsersCount = (totalCount: number): setTotalUsersCountAT => ({
    type: 'SET_TOTAL_USERS_COUNT',
    totalCount: totalCount
})

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingAT => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching: isFetching
})

export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressAT => ({
    type: 'TOGGLE_FOLLOWING_PROGRESS',
    isFetching: isFetching,
    userId: userId
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionAT>) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export default usersReducer;