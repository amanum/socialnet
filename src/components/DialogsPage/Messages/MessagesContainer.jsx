import React from 'react';
import {
	addMessage,
	onMessageChange,
} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		messagesData: state.dialogsPage.messagesData,
		newMessageText: state.dialogsPage.newMessageText,
		isAuth: state.auth.isAuth
	}
}

let dispatchObj = {
	addMessage,
	onMessageChange
}

const MessagesContainer = connect(mapStateToProps, dispatchObj)(Messages)

export default MessagesContainer;
