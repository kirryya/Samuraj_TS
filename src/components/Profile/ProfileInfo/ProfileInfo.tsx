import React, {ChangeEvent} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {ContactsType, ProfilePropsType} from "../Profile";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"

type ProfileInfoPropsType = ProfilePropsType

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length) {
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
            {props.isLoading
                ? <div className={s.loading}><Preloader/></div>
                : <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large || userPhoto} alt="Avatar" className={s.userPhoto}/>
                    <div>{props.isOwner && <input type={"file"} onChange={onChangeAvatar}/>}</div>
                    <div><b>Full name:</b> {props.profile.fullName}</div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    <div><b>About me:</b> {props.profile.aboutMe}</div>
                    <div><b>Looking for a job:</b> {(props.profile.lookingForAJob) ? "Yes" : "No"} </div>
                    {props.profile.lookingForAJob &&
                        <div><b>About a job:</b> {props.profile.lookingForAJobDescription}</div>}
                    <div>
                        <b>Contact: </b> {Object.keys(props.profile.contacts).map(key => {
                        return <Contact key={key} title={key}
                                        value={props.profile && props.profile.contacts[key as keyof ContactsType]}/>
                    })
                    }
                    </div>
                </div>
            }
        </div>
    );
};

export default ProfileInfo;

export const Contact = ({title, value}: { title: string, value: string | null }) => {
    return (
        <div className={s.contact}>
            <b>{title}: </b> {value}
        </div>
    )

}