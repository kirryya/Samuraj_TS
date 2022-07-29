import {AnyAction, applyMiddleware, combineReducers, createStore, compose} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import appReducer from "./app-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

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

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>

export default store

