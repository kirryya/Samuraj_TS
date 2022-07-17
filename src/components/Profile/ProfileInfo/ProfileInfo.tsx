import React, { ChangeEvent } from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"

type ProfileInfoPropsType = ProfilePropsType

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const onChangeAvatar = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.files && e.currentTarget.files.length) {
            props.savePhoto(e.currentTarget.files[0])
        }

    }

    return (
        <div>
            <div>
                <img src="https://storge.pic2.me/c/1360x800/323/582b0f346f341.jpg"
                     alt="background"
                     className={s.wallpaper}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} alt="Avatar" className={s.userPhoto}/>
                <div>{props.isOwner && <input type={"file"} onChange={onChangeAvatar}/>}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div>Полное имя: {props.profile.fullName}</div>
                <div>Про меня: {props.profile.aboutMe}</div>
                <div>Ищу работу: {(props.profile.lookingForAJob) ? "Да" : "Нет"} </div>
                <div>Какую ищу работу: {props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;