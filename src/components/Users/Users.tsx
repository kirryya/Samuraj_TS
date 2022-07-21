import React from 'react';
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import style from "./Users.module.css"

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    portionSize: number
}

const Users = (props: UsersPropsType) => {
    return (
        <div>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                portionSize={props.portionSize}
            />
            <div className={style.user}>
                {
                    props.users.map(u =>
                        <User key={u.id}
                              user={u}
                              follow={props.follow}
                              unfollow={props.unfollow}
                              followingInProgress={props.followingInProgress}
                              followUser={props.followUser}
                              unfollowUser={props.unfollowUser}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Users

