import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {getFriendsS} from "../../redux/selectors/navbarSelector";

let mapStateToProps = (state) => {
    return {
        friends: getFriendsS(state)
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
