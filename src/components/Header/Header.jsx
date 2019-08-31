import React from 'react';
import s from './Header.module.css'

const Header = () => {
	return (
		<header className={s.AppHeader}>
		  <div>
			  <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt=""/>
		  </div>
		</header>
	);
}

export default Header;
