import React from 'react';
import Profile from "./Profile";
import {getMyProfile, getMyStatus, getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
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
            this.props.getMyStatus();
        }
        else {
            this.props.getProfile(userId);
            this.props.getStatus(userId);
        }

    }

    render() {
        return (
            this.props.isFetched ?
                <Preloader/> :
                <Profile {...this.props} profile={this.props.profile}
                         isLogined={this.props.isLogined}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetched: state.profilePage.isFetched,
        status: state.profilePage.status
    }
};

export default compose(
    connect(mapStateToProps, {getMyProfile, getProfile, getStatus, updateStatus, getMyStatus}),
    //withRedirect,
    withRouter
)(ProfileContainer);
