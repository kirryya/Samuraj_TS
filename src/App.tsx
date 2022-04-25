import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContaiter";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/" element={<ProfileContainer/>}/>
                    <Route path="/profile/:userID" element={<ProfileContainer/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/users/" element={<UsersContainer/>}/>
                    <Route path="/news" element={() => {}}/>
                    <Route path="/music" element={() => {}}/>
                    <Route path="/settings" element={() => {}}/>
                </Routes>
            </div>
        </div>
    );
}

export default App


