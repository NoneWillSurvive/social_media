import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";


class ProfileContainer extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        // здесь должен быть запрос по айди юзера.
        // пока захардкожено /2
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2").then( response =>{
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



export default connect(mapStateToProps, {setUserProfile} )(ProfileContainer);
