import React from 'react';
import Profile from "./Profile";
import {getMyProfile, getProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {withRedirect} from "../hoc/withRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // match пришел из withRouter - как отслеживание URLa
        let userId = this.props.match.params.userId;
        if (!userId && !this.props.isFetched) {
            this.props.getMyProfile();
        }
        else {
            this.props.getProfile(userId);
        }
    }

    render() {
        return (
            this.props.isFetched ?
                <Preloader/> :
                <Profile {...this.props} profile={this.props.profile} isLogined={this.props.isLogined}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetched: state.profilePage.isFetched
    }
};

export default compose(
    connect(mapStateToProps, {getMyProfile, getProfile}),
    withRedirect,
    withRouter
)(ProfileContainer);
