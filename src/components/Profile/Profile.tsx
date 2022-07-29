import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {valuesProfileDataForm} from "./ProfileInfo/ProfileDataForm";

export type PhotosType = {
    small: string | null,
    large: string | null,
}
export type ContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}

export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
}

export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    isLoading: boolean
    updateProfile: (profile: valuesProfileDataForm) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                isLoading={props.isLoading}
                updateProfile={props.updateProfile}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;