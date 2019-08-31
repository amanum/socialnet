import React from 'react';
import Menu from "./Menu/Menu";
import s from './Sidebar.module.css'

const Sidebar = () => {
	return (
			  <div className={s.AppSidebar}>
				  <Menu />
			  </div>
	);
}

export default Sidebar;
