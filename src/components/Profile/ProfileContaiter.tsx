import React, {ComponentType} from 'react';
import Profile, {ProfilePropsType} from "./Profile";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from "redux";
import {withRouter} from '../../hoc/WithRouter';

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

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)