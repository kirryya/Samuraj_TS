import React from 'react';
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                 alt="Avatar"/>
            post1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export default Post;