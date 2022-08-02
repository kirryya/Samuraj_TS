import s from "./ProfileDataForm.module.css";
import React from "react";
import {useFormik} from "formik";
import {ProfileType} from "../Profile";

type ProfileDataFormPropsType = {
    updateProfile: (values: valuesProfileDataForm) => void
    onChange: () => void
    profile: ProfileType
}

export type valuesProfileDataForm = {
    aboutMe: string | null
    lookingForAJob: boolean
    fullName: string | null
    lookingForAJobDescription: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
}

export const ProfileDataForm = (props: ProfileDataFormPropsType) => {

    const formik = useFormik({
        initialValues: {
            aboutMe: props.profile.aboutMe,
            lookingForAJob: props.profile.lookingForAJob,
            fullName: props.profile.fullName,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            contacts: {
                facebook: props.profile.contacts.facebook ? props.profile.contacts.facebook : "",
                website: props.profile.contacts.website ? props.profile.contacts.website : "",
                vk: props.profile.contacts.vk ? props.profile.contacts.vk : "",
                twitter: props.profile.contacts.twitter ? props.profile.contacts.twitter : "",
                instagram: props.profile.contacts.instagram ? props.profile.contacts.instagram : "",
                youtube: props.profile.contacts.youtube ? props.profile.contacts.youtube : "",
                github: props.profile.contacts.github ? props.profile.contacts.github : "",
                mainLink: props.profile.contacts.mainLink ? props.profile.contacts.mainLink : "",
            }
        },
        onSubmit: values => {
            props.updateProfile(values)
            props.onChange()
        },
    })

    return (
        <div className={s.descriptionBlockContainer}>
            <form onSubmit={formik.handleSubmit} className={s.descriptionBlock}>
                <div>
                    <label htmlFor="fullName">FullName: </label>
                    <input
                        id="fullName"
                        type="text"
                        {...formik.getFieldProps('fullName')}
                    />
                </div>
                <div>
                    <label htmlFor="aboutMe">AboutMe: </label>
                    <input
                        id="aboutMe"
                        type="text"
                        {...formik.getFieldProps('aboutMe')}
                    />
                </div>
                <div>
                    <label htmlFor="lookingForAJob">LookingForAJob: </label>
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
                    <b>Contact: </b> {Object.keys(props.profile.contacts).map(key => {
                    return <div>
                        <label><b>{key}: </b></label>
                        <input key={key}
                               id={key}
                               type={key}
                               placeholder={key}
                               {...formik.getFieldProps(`contacts.${key}`)}
                               /*{formik.touched.key && formik.errors.password &&
                                   <div style={{color: "red"}}>{formik.errors.password}</div>}*/
                        />
                    </div>
                })
                }
                </div>
                <button type="submit" className={s.save}>Save</button>
            </form>
        </div>
    )
}