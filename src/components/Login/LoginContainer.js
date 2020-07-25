import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {getIsLoginedS} from "../../redux/selectors/authSelector";


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
        isLogined: getIsLoginedS(state)
    }
};

export default connect(mapStateToProps)(LoginContainer);
