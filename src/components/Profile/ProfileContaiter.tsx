import React, {JSXElementConstructor} from 'react';
import Profile, {ProfilePropsType} from "./Profile";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-reducer";
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';

type mapStateToPropsType = {
    profile: ProfilePropsType | null
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
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
}

// hoc для перехода на страницу Login, если ты не авторизован
let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

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

export default connect(mapStateToProps, {getUserProfile})(withRouter(AuthRedirectComponent));