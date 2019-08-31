import React from 'react';
import s from './MenuItem.module.css'

const MenuItem = (props) => {
	return (
			  <li className={s.menuItem}>
				  <a href="#">{props.menuItem}</a>
			  </li>
	);
}

export default MenuItem;
