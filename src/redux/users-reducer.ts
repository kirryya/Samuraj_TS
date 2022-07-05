import {followAPI, usersAPI} from '../api/api';
import {Dispatch} from 'redux';
import {handleServerNetworkError} from '../components/common/Error-utils/error-utils';
import {SetErrorAT} from './auth-reducer';
import {updateObjectInArray} from "../utils/object-helpers";
import {followUnfollowFlow} from "../utils/followUnfollowFlow";

let initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[],
    portionSize: 10
}

const usersReducer = (state: InitialStateType = initialState, action: ActionAT): InitialStateType => {
    switch (action.type) {
        case 'USERS/FOLLOW':
            return {...state, users: updateObjectInArray(state, action.userId, "id", {followed: true})}
        case 'USERS/UNFOLLOW':
            return {...state, users: updateObjectInArray(state, action.userId, "id", {followed: false})}
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
export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<ActionAT>) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    try {
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    } catch (error) {
        if (error instanceof Error) {
            handleServerNetworkError(error, dispatch)
        }
    }
}

export const followUser = (userId: number) => async (dispatch: Dispatch<ActionAT>) => {
    await followUnfollowFlow(dispatch, userId, followAPI.setUnfollow.bind(followAPI), unfollow)
}

export const unfollowUser = (userId: number) => async (dispatch: Dispatch<ActionAT>) => {
    await followUnfollowFlow(dispatch, userId, followAPI.setFollow.bind(followAPI), follow)
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
export type InitialStateType = typeof initialState
export type ActionAT = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
    | SetErrorAT

export default usersReducer;