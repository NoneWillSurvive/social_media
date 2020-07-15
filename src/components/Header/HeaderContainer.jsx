import React from 'react';
import Header from "./Header";
import {getAuthInfo} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthInfo(this.props.id);
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

export default connect(mapStateToProps, {getAuthInfo})(HeaderContainer);
