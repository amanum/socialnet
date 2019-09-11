import React from 'react';
import s from './Messages.module.css'
import Message from "./Message/Message";

const Messages = (props) => {
	
	let messages = props.messagesData.map(m => <Message name={m.name} message={m.message}/>)
	
	let newMessageElement = React.createRef();
	
	let sendMessage = () => {
		let text = newMessageElement.current.value
		newMessageElement.current.value = ""
		alert(text)
	}
	
	return (
			  <div className={s.AppDialogsRight}>
				  <ul className={s.AppDialogsMessages}>
					  {messages}
				  </ul>
				  <div className={s.newMessage}>
					  <textarea ref={newMessageElement} name="newMessageInput"></textarea>
					  <button onClick={sendMessage} className={s.meSendBtn}>Send</button>
				  </div>
			  </div>
	);
}

export default Messages;
