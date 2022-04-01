import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";


type MyPostsContainerPropsType = {
    store: ReduxStoreType
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    const addPostCallback = (newPostText:string) => {
        props.store.dispatch(addPostAC(newPostText))
    }

    const onChangeInputHandler = (newText:string) => {
        props.store.dispatch(updateNewPostTextAC(newText))
    }

    return (<MyPosts
            posts={props.store.getState().profilePage.posts}
            addPosts={addPostCallback}
            updateNewPostText={onChangeInputHandler}
            newPostText={props.store.getState().profilePage.newPostText}
        />
    );
};

export default MyPostsContainer;