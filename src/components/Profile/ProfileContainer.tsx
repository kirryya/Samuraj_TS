import React, {ComponentType} from 'react';
import Profile, {ProfilePropsType, ProfileType} from "./Profile";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from "redux";
import {withRouter} from '../../hoc/WithRouter';

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

class ProfileContainer extends React.Component<any, ProfilePropsType> {

    componentDidMount() {
        let userID: number = this.props.router.params.userID;
        if (!userID) {
            userID = 23120/*this.props.authorizedUserId*/
            /*if (!userID) {
                userID = this.props.history.push("/login")
            }*/
        }
        this.props.getUserProfile(userID);
        this.props.getStatus(userID)
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        );
    };
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.data.userId,
        isAuth: state.auth.isAuth
    }
}


export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)