import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


export const withRedirect = (Component) => {
    class WrapperContainer extends React.Component {
        render() {
            if (!this.props.isLogined) return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }
    }

    let mapStateToProps = (state) => ({
        isLogined: state.auth.isLogined
    });

    return connect(mapStateToProps)(WrapperContainer);
};
