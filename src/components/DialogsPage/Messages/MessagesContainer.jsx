import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogsReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

	let state = props.store.getState();
	
	let sendMessage = () => {
		props.store.dispatch(addMessageActionCreator())
	}
	
	let onMessageChange = (text) => {
		props.store.dispatch(updateNewMessageTextActionCreator(text))
	}
	
	return (
			  <Messages messagesData={state.dialogsPage.messagesData}
						addMessage={sendMessage}
						onMessageChange={onMessageChange}
						newMessageText={state.dialogsPage.newMessageText}
			  />
	);
}

export default MessagesContainer;
