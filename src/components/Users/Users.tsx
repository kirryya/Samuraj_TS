import axios from 'axios';
import React from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from "./users.module.css"
import userPhoto from "../../assets/images/user.png"

type UserPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

const Users = (props: UserPropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                      <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="Аватар"
                           className={styles.userPhoto}/>
                    </div>
                    <div> {
                        u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}> Follow </button>
                            : <button onClick={() => props.follow(u.id)}>Unfollow</button>
                    }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

