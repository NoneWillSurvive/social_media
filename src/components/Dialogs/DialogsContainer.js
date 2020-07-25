import React from 'react';
import {addMessage, updateDialogsMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withRedirect} from "../hoc/withRedirect";
import {compose} from "redux";
import {getMessagesS, getNewDialogsTextS, getPeoplesS} from "../../redux/selectors/dialogsSelector";


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
        peoples: getPeoplesS(state),
        messages: getMessagesS(state),
        newDialogsText: getNewDialogsTextS(state)
    }
};

export default compose(
    connect(mapStateToProps, {addMessage, updateDialogsMessage}),
    withRedirect
)(Dialogs);
