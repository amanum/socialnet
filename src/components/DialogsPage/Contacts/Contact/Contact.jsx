import React from 'react';
import s from './Contact.module.css'

const Contact = (props) => {
	return (
			  <li className={s.AppDialogsItem}>
				  <a href="#">{props.name}</a>
			  </li>
	);
}

export default Contact;
