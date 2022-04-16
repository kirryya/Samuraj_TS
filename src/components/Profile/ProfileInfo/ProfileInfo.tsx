import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";

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
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;