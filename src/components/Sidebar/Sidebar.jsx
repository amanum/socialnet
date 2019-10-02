import React from 'react';
import Menu from "./Menu/Menu";
import s from './Sidebar.module.css'
import BestFriends from "./BestFriends/BestFriends";

const Sidebar = (props) => {
	return (
			  <div className={s.AppSidebar}>
				  <Menu />
				  <BestFriends bestFriendsData={props.sidebarState.bestFriendsData}/>
			  </div>
	);
}

export default Sidebar;
