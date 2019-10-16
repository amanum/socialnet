import React from 'react';
import Contacts from "./Contacts/Contacts";
import s from './DialogsPage.module.css'
import MessagesContainer from "./Messages/MessagesContainer";
import ContactsContainer from "./Contacts/ContactsContainer";

const DialogsPage  = (props) => {
	return (
			  <div className={s.AppDialogs}>
				  <h2 className={s.AppDialogsTitle}>
					 Dialogs
				  </h2>
				  <div className={s.AppDialogsContent}>
					  <ContactsContainer />
					  <MessagesContainer/>
				  </div>
			  </div>
	);
}

export default DialogsPage ;
