import React from 'react';
import s from './BestFriend.module.css';

const BestFriend = (props) => {
	return (
			  <li className={s.bestFriendsItem}>
				  <a href="#" className={s.bestFriend}>
					  <img className={s.bestFriendAvatar} src={props.avatar}
							 alt=""/>
					  <div className={s.bestFriendName}>{props.name}</div>
				  </a>
			  </li>
	)
}

export default BestFriend;