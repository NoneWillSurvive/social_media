import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";


class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Login isLogined={this.props.isLogined}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isLogined: state.auth.isLogined
    }
};

export default connect(mapStateToProps)(LoginContainer);
