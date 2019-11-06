import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.AppHeader}>
            <div>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt=""/>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
                    : <NavLink to={'/login'}>LogIn</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;
