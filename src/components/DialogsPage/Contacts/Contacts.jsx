import React from 'react';
import s from './Contacts.module.css'
import Contact from "./Contact/Contact";

const Contacts = (props) => {

	let contacts = props.contactsData.map(c => <Contact key={c.id} name={c.name} id={c.id} />);
	
	return (
			  <div className={s.AppDialogsLeft}>
				  <ul className={s.AppDialogsList}>
					  {contacts}
				  </ul>
			  </div>
	
	);
};

export default Contacts;
