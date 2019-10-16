import React from 'react';
import {connect} from "react-redux";
import Contacts from "./Contacts";

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
		contactsData: state.dialogsPage.contactsData
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts)

export default ContactsContainer;
