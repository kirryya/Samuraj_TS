import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {useFormik} from "formik";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPosts: (newPostText: string) => void
}

export type PostsType = {
    id: number
    message: string
    likeCount: number
}

type FormikErrorType = {
    newPostText?: string
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)

    const formik = useFormik({
        initialValues: {
            newPostText: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.newPostText) {
                errors.newPostText = 'Required';
            }
            return errors;
        },
        onSubmit: values => {
            props.addPosts(values.newPostText);
            formik.resetForm();
        },
    });

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    {formik.touched.newPostText && formik.errors.newPostText &&
                        <div style={{color: "red"}}>{formik.errors.newPostText}</div>}
                    <TextField
                        id="outlined-basic"
                        label="Enter your post"
                        variant="outlined"
                        {...formik.getFieldProps('newPostText')}
                    />
                    <Button
                        type="submit"
                        variant="outlined"
                        endIcon={<SendIcon/>}
                        style={{maxWidth: '100px', maxHeight: '50px', minWidth: '131px', minHeight: '56px'}}
                    >
                        Add Post
                    </Button>
                </form>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;