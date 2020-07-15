import React from 'react';
import {addMessageActionCreator, updateDialogsMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        peoples: state.dialogsPage.peoples,
        messages: state.dialogsPage.messages,
        newDialogsText: state.dialogsPage.newDialogsText,
        isLogined: state.auth.isLogined
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessage: (text) => {
            dispatch(updateDialogsMessageActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
