import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData, setUserDataImage} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode == 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            }
        }).then(response => {
            if (this.props.isLogined) {
                axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + this.props.id).then(
                    response => {
                        this.props.setUserDataImage(response.data.photos.small, response.data.lookingForAJob);
                    }
                )
            }

        })
    }


    render() {
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        isLogined: state.auth.isLogined,
        login: state.auth.login,
        miniAvatar: state.auth.miniAvatar,
        lookingForAJob: state.auth.lookingForAJob
    }
};

export default connect(mapStateToProps, {setAuthUserData, setUserDataImage})(HeaderContainer);
