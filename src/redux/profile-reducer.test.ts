import profileReducer, {addPostAC, deletePostAC} from "./profile-reducer";
import {PostsType} from "../components/Profile/MyPosts/MyPosts";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 15},
        {id: 2, message: "It is my first post", likeCount: 30}
    ] as Array<PostsType>,
    profile: null,
    status: "",
}

it("length of posts should be incremented", () => {
    let action = addPostAC("New post")
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})

it("message of new post should be correct", () => {
    let action = addPostAC("New post")
    let newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe("New post")
})

it("after deleting length of posts should be decremented", () => {
    let action = deletePostAC(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
})

