import React from 'react';
import s from "./Post.module.css";

export type PostPropsType = {
    message: string
    likeCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                 alt="Avatar"/>
            {props.message}
            <div>
                <span>{props.likeCount}</span>
                <span> likes</span>
            </div>
        </div>
    );
};

export default Post;