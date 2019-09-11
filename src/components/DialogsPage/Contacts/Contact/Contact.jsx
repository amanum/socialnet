import React from 'react';
import s from './Contact.module.css'
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const Contact = (props) => {
	let path = `/dialogs/${props.id}`;
	return (
			  <li className={s.AppDialogsItem}>
				  <NavLink to={path}>{props.name}</NavLink>
			  </li>
	);
};

Contact.propTypes = {
	name: PropTypes.string
};

export default Contact;
