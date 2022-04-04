import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, UnfollowAC, UserType} from "../../redux/users-reducer";

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

type mapStateToPropsType = {
    users: Array<UserType>
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(UnfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer