import React from 'react';
import {
	addMessage,
	onMessageChange,
} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

// const MessagesContainer = (props) => {
//
// 	let state = props.store.getState();
//
// 	let sendMessage = () => {
// 		props.store.dispatch(addMessageActionCreator())
// 	}
//
// 	let onMessageChange = (text) => {
// 		props.store.dispatch(updateNewMessageTextActionCreator(text))
// 	}
//
// 	return (
// 			  <Messages messagesData={state.dialogsPage.messagesData}
// 						addMessage={sendMessage}
// 						onMessageChange={onMessageChange}
// 						newMessageText={state.dialogsPage.newMessageText}
// 			  />
// 	);
// }

let mapStateToProps = (state) => {
	return {
		messagesData: state.dialogsPage.messagesData,
		newMessageText: state.dialogsPage.newMessageText
	}
}

let dispatchObj = {
	addMessage,
	onMessageChange
}

const MessagesContainer = connect(mapStateToProps, dispatchObj)(Messages)

export default MessagesContainer;
