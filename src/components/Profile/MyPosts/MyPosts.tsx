import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddPostAT, UpdateNewPostTextAT} from "../../../redux/state";

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

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostCallback = () => {
        if (newPostElement.current) {
            props.dispatch({type: 'ADD-POST', newPostText: props.newPostText})
        }
    }

    const onChangeInputHandler = () => {
        if (newPostElement.current)
            props.dispatch({type: 'UPD-NEW-POST-TEXT', newText: newPostElement.current.value})
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onChangeInputHandler}/>
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