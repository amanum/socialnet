import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogsReducer";
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

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(addMessageActionCreator())
		},
		onMessageChange: (text) => {
			dispatch(updateNewMessageTextActionCreator(text))
		}
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;
