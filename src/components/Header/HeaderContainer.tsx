import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {AuthType, setAuthUserData} from "../../redux/auth-reducer";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<any, AuthType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data)
                }
            });
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
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);