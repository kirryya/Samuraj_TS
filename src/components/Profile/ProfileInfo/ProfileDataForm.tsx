import s from "./ProfileDataForm.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {AppStateType} from "../../../redux/redux-store";

type FormikErrorType = {
    aboutMe?: string
    lookingForAJob?: string
}

export const ProfileDataForm = () => {

    const dispatch = useDispatch()
    const aboutMe = useSelector<AppStateType, string | undefined>(state => state.profilePage.profile?.aboutMe)
    const lookingForAJob = useSelector<AppStateType, boolean | undefined>(state => state.profilePage.profile?.lookingForAJob)

    const formik = useFormik({
        initialValues: {
            aboutMe: aboutMe,
            lookingForAJob: lookingForAJob,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.aboutMe) {
                errors.aboutMe = 'Must be';
            }
            return errors;
        },
        onSubmit: values => {
            //dispatch(loginTC(values))
        },
    })

    return (
        <div className={s.descriptionBlockContainer}>
            <form onSubmit={formik.handleSubmit} className={s.descriptionBlock}>
                <div>
                    <label htmlFor="aboutMe">aboutMe</label>
                    <input
                        id="aboutMe"
                        type="text"
                        {...formik.getFieldProps('aboutMe')}
                    />
                    {formik.touched.aboutMe && formik.errors.aboutMe ? (
                        <div>{formik.errors.aboutMe}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="lookingForAJob">lookingForAJob</label>
                    <input id="lookingForAJob" type="checkbox" {...formik.getFieldProps('lookingForAJob')} />
                </div>

                <button type="submit" className={s.back}>Submit</button>
            </form>
        </div>
    )
}