import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
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
            props.addPost()
        }
    }

    const onChangeInputHandler = () => {
        if (newPostElement.current)
            props.updateNewPostText(newPostElement.current.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onChangeInputHandler} value={props.newPostText}/>
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