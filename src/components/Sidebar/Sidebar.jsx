import React from 'react';
import Menu from "./Menu/Menu";
import s from './Sidebar.module.css'
import BestFriendsContainer from "./BestFriends/BestFriend/BestFriendsContainer";

const Sidebar = (props) => {
	return (
			  <div className={s.AppSidebar}>
				  <Menu />
				  <BestFriendsContainer />
			  </div>
	);
}

export default Sidebar;
