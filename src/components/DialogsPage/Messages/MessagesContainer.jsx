import React from 'react';
import {
	addMessage,
	onMessageChange,
} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

let AuthRedirectComponent = withAuthRedirect(Messages)

let mapStateToProps = (state) => {
	return {
		messagesData: state.dialogsPage.messagesData,
		newMessageText: state.dialogsPage.newMessageText,
	}
}

let dispatchObj = {
	addMessage,
	onMessageChange
}

const MessagesContainer = connect(mapStateToProps, dispatchObj)(AuthRedirectComponent)

export default MessagesContainer;
