import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {AuthType, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<any, AuthType> {
    componentDidMount() {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                this.props.setAuthUserData(data)
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