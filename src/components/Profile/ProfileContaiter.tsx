import React, {JSXElementConstructor} from 'react';
import Profile, {ProfilePropsType} from "./Profile";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {profileAPI} from "../../api/api";

type mapStateToPropsType = {
    profile: ProfilePropsType | null
}

class ProfileContainer extends React.Component<any, ProfilePropsType> {

    componentDidMount() {
        let userID: string = this.props.router.params.userID;
        if (!userID) {
            userID = "23120"
        }
        profileAPI.getProfile(userID).then(data => {
            this.props.setUserProfile(data);
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
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

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));