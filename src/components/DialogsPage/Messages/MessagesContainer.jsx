import React from 'react';
import {
    addMessage,
} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let dispatchObj = {
    addMessage,
}

export default compose(
	connect(mapStateToProps, dispatchObj),
	withAuthRedirect,
)(Messages);
