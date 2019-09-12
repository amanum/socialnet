import React from 'react';
import s from './Message.module.css'
import PropTypes from 'prop-types';

const Message = (props) => {
	return (
			  <li className={s.AppDialogsMessagesItem}>
				  <div className={s.AppDialogsMessagesItemAvatar}>
					  <img src={props.avatar}
							 alt=""/>
					  <div className={s.AppDialogsMessagesItemName}>
						  {props.name}
					  </div>
				  </div>
				  <div className={s.AppDialogsMessagesItemText}>
					  {props.message}
				  </div>
			  </li>
	);
};

Message.propTypes = {
	name: PropTypes.string,
	message: PropTypes.string
};

export default Message;
