import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        friends: state.navbar.friends
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
