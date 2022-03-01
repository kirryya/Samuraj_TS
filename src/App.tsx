import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs, {DialogItemPropsType, MessagesPropsType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PostsType} from "./components/Profile/MyPosts/MyPosts";

type AppPropsType ={
    posts: Array<PostsType>
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagesPropsType>
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile posts={props.posts}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path="/news" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path="/music" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path="/settings" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>);
}

export default App
