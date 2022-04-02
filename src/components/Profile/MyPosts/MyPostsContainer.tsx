import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

/*type mapStateToPropsType = {
    posts:
    newPostText:
}*/

type mapDispatchToPropsType = {
    addPosts: (newPostText: string) => void
    updateNewPostText: (newText: string) => void
}

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPosts: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;