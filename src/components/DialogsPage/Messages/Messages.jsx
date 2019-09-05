import React from 'react';
import s from './Messages.module.css'
import Message from "./Message/Message";

const Messages = (props) => {
	let messages = props.messagesData.map(m => <Message name={m.name} message={m.message}/>)
	return (
			  <div className={s.AppDialogsRight}>
				  <ul className={s.AppDialogsMessages}>
					  {messages}
				  </ul>
			  </div>
	);
}

export default Messages;
