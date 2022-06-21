import {Dispatch} from "redux";
import {AxiosResponse} from "axios";
import {ResponseType} from "../api/api";
import {handleServerNetworkError} from "../components/common/Error-utils/error-utils";
import {ActionAT, toggleFollowingProgress} from "../redux/users-reducer";

export const followUnfollowFlow = async (
    dispatch: Dispatch<ActionAT>,
    userId: number,
    apiMethod: (userId: number) => Promise<AxiosResponse<ResponseType>>,
    actionCreator: (userId: number) => ActionAT
) => {
    dispatch(toggleFollowingProgress(true, userId))
    try {
        let response = await apiMethod(userId)
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    } catch (error) {
        if (error instanceof Error) {
            handleServerNetworkError(error, dispatch)
        }
    }
}