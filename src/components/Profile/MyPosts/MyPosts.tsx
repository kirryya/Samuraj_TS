import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPosts: (newPostText: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

export type PostsType = {
    id: number
    message: string
    likeCount: number
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)

    const addPostCallback = () => {
        props.addPosts(props.newPostText)
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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