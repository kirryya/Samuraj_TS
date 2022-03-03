import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
    appState: StateType
}

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile posts={props.appState.profilePage.posts}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs dialogs={props.appState.messagesPage.dialogs}
                                                               messages={props.appState.messagesPage.messages}/>}/>
                    <Route path="/news" element={<Dialogs dialogs={props.appState.messagesPage.dialogs}
                                                          messages={props.appState.messagesPage.messages}/>}/>
                    <Route path="/music" element={<Dialogs dialogs={props.appState.messagesPage.dialogs}
                                                           messages={props.appState.messagesPage.messages}/>}/>
                    <Route path="/settings" element={<Dialogs dialogs={props.appState.messagesPage.dialogs}
                                                              messages={props.appState.messagesPage.messages}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App
