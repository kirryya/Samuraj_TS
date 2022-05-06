import React, {JSXElementConstructor} from 'react';
import Profile, {ProfilePropsType} from "./Profile";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-reducer";

type mapStateToPropsType = {
    profile: ProfilePropsType | null
    isAuth: boolean
}

class ProfileContainer extends React.Component<any, ProfilePropsType> {

    componentDidMount() {
        let userID: number = this.props.router.params.userID;
        if (!userID) {
            userID = 23120
        }
        this.props.getUserProfile(userID);
    }

    render() {
        if (!this.props.isAuth) return <Navigate to="/login"/>;

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

//оболочка для классовой компонеты
export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));