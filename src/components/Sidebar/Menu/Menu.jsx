import React from 'react';
import MenuItem from "./MenuItem/MenuItem";
import s from './Menu.module.css'

const Menu = () => {
	return (
			  <ul className={s.menu}>
				  <MenuItem menuItem="Profile"/>
				  <MenuItem menuItem="Messages"/>
				  <MenuItem menuItem="News"/>
				  <MenuItem menuItem="Music"/>
				  <MenuItem menuItem="Settings"/>
			  </ul>
	);
}

export default Menu;
