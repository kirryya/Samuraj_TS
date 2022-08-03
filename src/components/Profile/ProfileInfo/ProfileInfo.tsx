import React, {ChangeEvent, useState} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {ContactsType, ProfilePropsType, ProfileType} from "../Profile";
import {NavLink} from "react-router-dom";
import userPhoto from '../../../assets/images/user.png'
import {ProfileDataForm, valuesProfileDataForm} from './ProfileDataForm';
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = ProfilePropsType &
    {
        updateProfile: (values: valuesProfileDataForm) => void
    }

type ProfileDataPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    isLoading: boolean
    error: string | null
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    const onclickHandler = () => {
        setEditMode(true)
    }

    const onChangeHandler = () => {
        setEditMode(false)
    }

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
                : <div>
                    {!props.isOwner
                        ? <NavLink to={'/users'}>
                            <div className={s.back}>Back to Users</div>
                        </NavLink>
                        : <div className={s.back}>
                            <button onClick={onclickHandler}>Edit Profile</button>
                        </div>
                    }
                    <div className={s.profile}>
                        <div className={s.profileAva}>
                            <img src={props.profile.photos.large || userPhoto} alt="Avatar" className={s.userPhoto}/>
                            <div className={s.changeAvatar}><b>Change Avatar: </b>{props.isOwner &&
                                <input type={"file"} onChange={onChangeAvatar}/>}</div>
                        </div>
                        <div>{editMode
                            ? <ProfileDataForm
                                updateProfile={props.updateProfile}
                                onChange={onChangeHandler}
                                profile={props.profile}
                            />
                            : <ProfileData profile={props.profile}
                                           isOwner={props.isOwner}
                                           status={props.status}
                                           updateStatus={props.updateStatus}
                                           savePhoto={props.savePhoto}
                                           isLoading={props.isLoading}
                                           error={props.error}
                            />
                        }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProfileInfo;

export const ProfileData = (props: ProfileDataPropsType) => {

    return (
        <div className={s.descriptionBlockContainer}>
            <div className={s.descriptionBlock}>
                <div><b>Full name:</b> {props.profile.fullName}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div><b>About me:</b> {props.profile.aboutMe}</div>
                <div><b>Looking for a job:</b> {(props.profile.lookingForAJob) ? "Yes" : "No"} </div>
                {props.profile.lookingForAJob &&
                    <div><b>My professionals skills:</b> {props.profile.lookingForAJobDescription}</div>}
                <div>
                    <b>Contact: </b> {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key}
                                    title={key}
                                    value={props.profile && props.profile.contacts[key as keyof ContactsType]}
                    />
                })
                }
                </div>
                <div style={{color: "red"}}>
                    {props.error && props.error}
                </div>
            </div>
        </div>
    )
}

export const Contact = ({title, value}: { title: string, value: string | null }) => {
    return (
        <div className={s.contact}>
            <b>{title}: </b> {value}
        </div>
    )
}