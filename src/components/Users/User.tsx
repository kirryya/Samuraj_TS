import React from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from "./User.module.css"
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

export const User = (props: UserPropsType) => {
    return (
        <div className={styles.user}>
            <div>
                <div className={styles.photoBlock}>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small || userPhoto}
                             alt="Аватар"
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div> {
                    props.user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.followUser(props.user.id)
                                  }}>Follow</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.unfollowUser(props.user.id)
                                  }}>Unfollow</button>
                }
                </div>
            </div>
            <div className={styles.infoBlock}>
                <div><b>{props.user.name}</b></div>
                <div>{props.user.status || "No status"}</div>
                <NavLink to={'/profile/' + props.user.id}>
                    <span>Go to profile</span>
                </NavLink>
            </div>
        </div>
    );
};
