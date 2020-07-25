import React from 'react';
import Header from "./Header";
import {getAuthInfo} from "../../redux/authReducer";
import {connect} from "react-redux";
import {
    getAuthIdS,
    getIsLoginedS,
    getLoginS,
    getLookingForAJobS,
    getMiniAvatarS
} from "../../redux/selectors/authSelector";

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
        id: getAuthIdS(state),
        isLogined: getIsLoginedS(state),
        login: getLoginS(state),
        miniAvatar: getMiniAvatarS(state),
        lookingForAJob: getLookingForAJobS(state)
    }
};

export default connect(mapStateToProps, {getAuthInfo})(HeaderContainer);
