import s from "./ProfileDataForm.module.css";
import React from "react";
import {useFormik} from "formik";
import {useAppSelector} from "../../../redux/redux-store";
import {ContactsType} from "../Profile";

type ProfileDataFormPropsType = {
    updateProfile: (values: valuesProfileDataForm) => void
}

export type valuesProfileDataForm = {
    aboutMe: string | undefined
    lookingForAJob: boolean | undefined
    fullName: string | undefined
    lookingForAJobDescription: string | undefined
    contacts: ContactsType
}

export const ProfileDataForm = (props: ProfileDataFormPropsType) => {


    const aboutMe = useAppSelector(state => state.profilePage.profile?.aboutMe)
    const lookingForAJob = useAppSelector(state => state.profilePage.profile?.lookingForAJob)
    const fullName = useAppSelector(state => state.profilePage.profile?.fullName)
    const lookingForAJobDescription = useAppSelector(state => state.profilePage.profile?.lookingForAJobDescription)
        const {
        facebook,
        website,
        vk,
        twitter,
        instagram,
        youtube,
        github,
        mainLink
        // @ts-ignore
    } = useAppSelector(state => state.profilePage.profile.contacts)

    const formik = useFormik({
        initialValues: {
            aboutMe: aboutMe,
            lookingForAJob: lookingForAJob,
            fullName: fullName,
            lookingForAJobDescription: lookingForAJobDescription,
            contacts: {
                facebook: facebook,
                website: website,
                vk: vk,
                twitter: twitter,
                instagram: instagram,
                youtube: youtube,
                github: github,
                mainLink: mainLink
            }
        },
        onSubmit: values => {
            props.updateProfile(values)
        },
    })

    return (
        <div className={s.descriptionBlockContainer}>
            <form onSubmit={formik.handleSubmit} className={s.descriptionBlock}>
                <div>
                    <label htmlFor="fullName">fullName: </label>
                    <input
                        id="fullName"
                        type="text"
                        {...formik.getFieldProps('fullName')}
                    />
                </div>
                <div>
                    <label htmlFor="aboutMe">aboutMe: </label>
                    <input
                        id="aboutMe"
                        type="text"
                        {...formik.getFieldProps('aboutMe')}
                    />
                </div>
                <div>
                    <label htmlFor="lookingForAJob">lookingForAJob: </label>
                    <input
                        id="lookingForAJob"
                        type="checkbox"
                        {...formik.getFieldProps('lookingForAJob')}
                    />
                </div>
                <div>
                    <label htmlFor="lookingForAJobDescription">My professionals skills: </label>
                    <input
                        id="lookingForAJobDescription"
                        type="text"
                        {...formik.getFieldProps('lookingForAJobDescription')}
                    />
                </div>
                <div>
                    <label htmlFor="facebook">facebook: </label>
                    <input
                        id="facebook"
                        type="text"
                        {...formik.getFieldProps('facebook')}
                    />
                </div>
                <button type="submit" className={s.save}>Save</button>
            </form>
        </div>
    )
}