import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!this.props.match.params.userId) {
            // здесьдолжен быть id залогиненного пользователя.
            // пока захаркодена 2
            userId = 2;
        }
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId).then( response =>{
            this.props.setUserProfile(response.data);
            }
        );
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

export default connect(mapStateToProps, {setUserProfile} )(withRouter(ProfileContainer));
