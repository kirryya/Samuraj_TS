import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import appReducer from "./app-reducer";
import {useDispatch} from "react-redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof reducers>
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppStateType, unknown, AnyAction>>()
export type ThunkType = ThunkAction<void, AppStateType, unknown, AnyAction >

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

