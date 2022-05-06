import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {AuthType, getAuthUserData} from "../../redux/auth-reducer";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<any, AuthType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        );
    };
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);