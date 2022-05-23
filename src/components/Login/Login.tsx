import React from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField} from "@mui/material";
import {loginTC} from "../../redux/auth-reducer";
import { Navigate } from 'react-router-dom';
import {AppStateType} from "../../redux/redux-store";


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be more than 3';
            }

            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm();
        },
    })

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Login</h1>
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>

                    <form onSubmit={formik.handleSubmit}>
                        <FormGroup>
                            <TextField label="Email"
                                       margin="normal"
                                       {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email &&
                                <div style={{color: "red"}}>{formik.errors.email}</div>}

                            <TextField type="password"
                                       label="Password"
                                       margin="normal"
                                       {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password &&
                                <div style={{color: "red"}}>{formik.errors.password}</div>}

                            <FormControlLabel label={'Remember me'}
                                              control={<Checkbox
                                                  checked={formik.values.rememberMe}
                                                  {...formik.getFieldProps('rememberMe')}
                                              />}
                            />
                            <Button type={'submit'} variant={'contained'} color={'primary'}>
                                Login
                            </Button>
                        </FormGroup>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};