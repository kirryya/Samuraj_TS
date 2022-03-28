import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostAC, AddPostAT, updateNewPostTextAC, UpdateNewPostTextAT} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: AddPostAT | UpdateNewPostTextAT) => void
}

export type PostsType = {
    id: number
    message: string
    likeCount: number
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)

    const addPostCallback = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeInputHandler} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostCallback}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;