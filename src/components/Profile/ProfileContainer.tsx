import React, {ComponentType} from 'react';
import Profile, {ProfileType} from "./Profile";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from "redux";
import {withRouter} from '../../hoc/WithRouter';

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
    isLoading: boolean
}

class ProfileContainer extends React.Component<any, ProfileType> {

    refreshProfile() {
        let userID: number | undefined = this.props.router.params.userID;
        if (!userID) {
            userID = this.props.authorizedUserId
            if (!userID) {
                userID = this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userID);
        this.props.getStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<ProfileType>, snapshot?: any) {
        if (this.props.router.params.userID != prevProps.router.params.userID)
            this.refreshProfile()
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.router.params.userID}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                isLoading={this.props.isLoading}
            />
        );
    };
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.data.id,
        isAuth: state.auth.isAuth,
        isLoading: state.profilePage.isLoading,
    }
}


export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)