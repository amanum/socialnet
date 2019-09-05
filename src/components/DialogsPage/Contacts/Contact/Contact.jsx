import React from 'react';
import s from './Contact.module.css'
import {NavLink} from "react-router-dom";

const Contact = (props) => {
	let path = `/dialogs/${props.id}`;
	return (
			  <li className={s.AppDialogsItem}>
				  <NavLink to={path}>{props.name}</NavLink>
			  </li>
	);
}

export default Contact;
