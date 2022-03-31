import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {ActionAT} from "./redux/store";
import {ReduxStoreType} from "./redux/redux-store";

type AppPropsType = {
    appState: ReduxStoreType
    dispatch: (action: ActionAT) => void
}

const App = (props: AppPropsType) => {
    const state = props.appState.getState()

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile posts={state.profilePage.posts}
                                                             dispatch={props.dispatch}
                                                             newPostText={state.profilePage.newPostText}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs dialogs={state.messagesPage.dialogs}
                                                               messages={state.messagesPage.messages}
                                                               dispatch={props.dispatch}
                                                               newMessageText={state.messagesPage.newMessageText}/>}/>
                    <Route path="/news" element={() => {}}/>
                    <Route path="/music" element={() => {}}/>
                    <Route path="/settings" element={() => {}}/>
                </Routes>
            </div>
        </div>
    );
}

export default App
