import {AddPostAT, ProfilePageType, UpdateNewPostTextAT} from "./state";

const profileReducer = (state: ProfilePageType, action: AddPostAT | UpdateNewPostTextAT) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: 7,
                message: action.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = ''
            break
        case 'UPD-NEW-POST-TEXT' :
            state.newPostText = action.newText;
            break

        default:
            return state
    }
}
export default profileReducer;