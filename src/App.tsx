import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContaiter";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {News} from "./components/News/News";
import {Music} from "./components/Music/News";
import {Settings} from "./components/Settings/News";
import {ErrorSnackbar} from "./components/common/Error-utils/ErrorSnackBar";
import {initializeAppTC} from "./redux/app-reducer";
import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";


const App = () => {

    const isInitialized = useSelector<AppStateType, boolean>(state => state.app.isInitialized)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])

    if (!isInitialized) return <Preloader/>

    return (
        <div className="app-wrapper">
            <ErrorSnackbar/>
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/" element={<ProfileContainer/>}/>
                    <Route path="/profile/:userID" element={<ProfileContainer/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/users/" element={<UsersContainer/>}/>
                    <Route path="/login/" element={<Login/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App


