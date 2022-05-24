import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsTypeForRedirect = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsTypeForRedirect => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: mapStateToPropsTypeForRedirect) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to="/login"/>;
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}