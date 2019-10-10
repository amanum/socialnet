import React from 'react';
import s from './Messages.module.css'
import Message from "./Message/Message";

const Messages = (props) => {

	let messages = props.messagesData.map(m => <Message avatar={m.avatar} name={m.name} message={m.message}/>)
	
	let newMessageElement = React.createRef();
	
	let sendMessage = () => {
		props.addMessage();
		newMessageElement.current.value = ''
	}
	
	let onMessageChange = () => {
		let text = newMessageElement.current.value;
		props.onMessageChange(text);
	}
	
	return (
			  <div className={s.AppDialogsRight}>
				  <ul className={s.AppDialogsMessages}>
					  {messages}
				  </ul>
				  <div className={s.newMessage}>
					  <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText} name="newMessageInput" />
					  <button onClick={sendMessage} className={s.meSendBtn}>Send</button>
				  </div>
			  </div>
	);
}

export default Messages;
