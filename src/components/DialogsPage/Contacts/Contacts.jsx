import React from 'react';
import s from './Contacts.module.css'
import Contact from "./Contact/Contact";

const Contacts = () => {
	return (
			  <div className={s.AppDialogsLeft}>
				  <ul className={s.AppDialogsList}>
					  <Contact name="Andrew" />
					  <Contact name="Dmitry" />
					  <Contact name="Sasha" />
					  <Contact name="Sveta" />
					  <Contact name="Valera" />
					  <Contact name="Viktor" />
					  <Contact name="This is a list item" />
					  <Contact name="Another list item" />
					  <Contact name="This is a list item" />
					  <Contact name="Yep, another list item" />
				  </ul>
			  </div>
	
	);
}

export default Contacts;
