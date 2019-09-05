import React from 'react';
import s from './Menu.module.css'
import {NavLink} from "react-router-dom";

const Menu = () => {
	return (
			  <ul className={s.menu}>
				  <li className={s.menuItem}>
					  <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
				  </li>
				  <li className={s.menuItem}>
					  <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
				  </li>
				  <li className={s.menuItem}>
					  <NavLink to="/">News</NavLink>
				  </li>
				  <li className={s.menuItem}>
					  <NavLink to="/">Music</NavLink>
				  </li>
				  <li className={s.menuItem}>
					  <NavLink to="/">Settings</NavLink>
				  </li>
			  </ul>
	);
}

export default Menu;
