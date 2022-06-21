import React from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from "./users.module.css"
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
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                            <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                                 alt="Аватар"
                                 className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div> {
                        props.user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.followUser(props.user.id)
                                      }}> Follow </button>
                            : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.unfollowUser(props.user.id)
                                      }}>Unfollow</button>
                    }
                    </div>
                </span>
            <span>
                    <span>
                        <div>{props.user.name}</div>
                        <div>{props.user.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
        </div>
    );
};
