import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {ReduxStoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: ReduxStoreType
}

const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile store={props.store}/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}/>
                    <Route path="/news" element={() => {}}/>
                    <Route path="/music" element={() => {}}/>
                    <Route path="/settings" element={() => {}}/>
                </Routes>
            </div>
        </div>
    );
}

export default App


