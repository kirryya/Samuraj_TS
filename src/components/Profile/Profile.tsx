import React from 'react';
import MyPosts, {PostsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostAT, UpdateNewPostTextAT} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: AddPostAT | UpdateNewPostTextAT) => void
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
        </div>
    );
};

export default Profile;