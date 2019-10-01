import React from 'react';
import Menu from "./Menu/Menu";
import s from './Sidebar.module.css'
import BestFriends from "./BestFriends/BestFriends";

const Sidebar = (props) => {
	debugger
	return (
			  <div className={s.AppSidebar}>
				  <Menu />
				  <BestFriends bestFriendsData={props.data.bestFriendsData}/>
			  </div>
	);
}

export default Sidebar;
