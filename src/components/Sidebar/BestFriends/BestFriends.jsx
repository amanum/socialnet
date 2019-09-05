import React from 'react';
import s from './BestFriends.module.css';
import BestFriend from "./BestFriend/BestFriend";
import Contact from "../../DialogsPage/Contacts/Contact/Contact";

const BestFriends = (props) => {
	let bestFriends = props.bestFriendsData.map(f => <BestFriend avatar={f.avatar} name={f.name}/>)
	return (
			  <div className={s.bestFriends}>
				  <h3>Best friends</h3>
				  <ul className={s.bestFriendsList}>
					  {bestFriends}
				  </ul>
			  </div>
	)
}

export default BestFriends;