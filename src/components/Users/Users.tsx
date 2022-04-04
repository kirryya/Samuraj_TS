import React from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from "./users.module.css"

type UserPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

const Users = (props: UserPropsType) => {

    props.users.length === 0 &&
    props.setUsers ([
        {
            id: 1,
            photoURL: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",
            followed: false,
            fullName: "Dmitry",
            status: "I am a boss!",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            photoURL: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",
            followed: true,
            fullName: "Viktor",
            status: "I am a boss too!",
            location: {city: "Kiev", country: "Ukraine"}
        },
        {
            id: 3,
            photoURL: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",
            followed: false,
            fullName: "Kostya",
            status: "I am a boss too!",
            location: {city: "Lodz", country: "Poland"}
        }
    ])

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                      <img src={u.photoURL} alt="Аватар" className={styles.userPhoto}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;