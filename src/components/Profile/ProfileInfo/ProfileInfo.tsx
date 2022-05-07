import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import ProfileStatus from "./ProfileStatus"

type ProfileInfoPropsType = ProfilePropsType

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://storge.pic2.me/c/1360x800/323/582b0f346f341.jpg"
                     alt="background"
                     className={s.wallpaper}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="Avatar"/>
                <ProfileStatus status={"Boom"}/>
                <div>Полное имя: {props.profile.fullName}</div>
                <div>Про меня: {props.profile.aboutMe}</div>
                <div>Ищу работу: {(props.profile.lookingForAJob) ? "Да" : "Нет"} </div>
                <div>Какую ищу работу: {props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;