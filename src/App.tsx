import React, {Suspense, useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {News} from "./components/News/News";
import {Music} from "./components/Music/News";
import {Settings} from "./components/Settings/News";
import {ErrorSnackbar} from "./components/common/Error-utils/ErrorSnackBar";
import {initializeAppTC} from "./redux/app-reducer";
import {Provider, useSelector} from "react-redux";
import store, {AppStateType, useAppDispatch} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
                <Suspense fallback={<div><Preloader/></div>}>
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer/>}>
                            <Route path={":userID"} element={<ProfileContainer/>}/>
                        </Route>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/users/" element={<UsersContainer/>}/>
                        <Route path="/login/" element={<Login/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
}

const SamurajJSApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    )
}

export default SamurajJSApp


