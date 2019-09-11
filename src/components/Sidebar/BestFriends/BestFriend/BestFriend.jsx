import React from 'react';
import s from './BestFriend.module.css';
import PropTypes from 'prop-types';

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
};

BestFriend.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string
};

export default BestFriend;