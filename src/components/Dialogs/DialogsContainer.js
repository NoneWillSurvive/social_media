import React from 'react';
import {addMessageActionCreator, updateDialogsMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withRedirect} from "../hoc/withRedirect";


let mapStateToProps = (state) => {
    return {
        peoples: state.dialogsPage.peoples,
        messages: state.dialogsPage.messages,
        newDialogsText: state.dialogsPage.newDialogsText
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

let AuthRedirectComponent = withRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
