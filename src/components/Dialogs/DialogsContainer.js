import React from 'react';
import {addMessageActionCreator, updateDialogsMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//     let peoples = props.store.getState().dialogsPage.peoples;
//     let messages = props.store.getState().dialogsPage.messages;
//     let newDialogsText = props.store.getState().dialogsPage.newDialogsText;
//
//     let addMessage = () => {
//         props.store.dispatch(addMessageActionCreator());
//     }
//     let onChangeMessage = (text) => {
//         props.store.dispatch(updateDialogsMessageActionCreator(text));
//     }
//
//
//     return (
//         <Dialogs onChangeMessage={onChangeMessage}
//                  addMessage={addMessage}
//                  peoples={peoples}
//                  newDialogsText={newDialogsText}
//                  messages={messages} />
//     )
// }

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
