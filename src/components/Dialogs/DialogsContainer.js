import React from 'react';
import {addMessage, updateDialogsMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withRedirect} from "../hoc/withRedirect";
import {compose} from "redux";


class DialogsContainer extends React.Component {
    componentDidMount() {
    }
    render() {
        return <Dialogs peoples={this.props.peoples}
                        messages={this.props.messages}
                        newDialogsText={this.props.newDialogsText}/>
    }
}

let mapStateToProps = (state) => {
    return {
        peoples: state.dialogsPage.peoples,
        messages: state.dialogsPage.messages,
        newDialogsText: state.dialogsPage.newDialogsText
    }
};

export default compose(
    connect(mapStateToProps, {addMessage, updateDialogsMessage}),
    withRedirect
)(Dialogs);
