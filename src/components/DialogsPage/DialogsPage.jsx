import React from 'react';
import Contacts from "./Contacts/Contacts";
import s from './DialogsPage.module.css'
import MessagesContainer from "./Messages/MessagesContainer";

const DialogsPage  = (props) => {
	let state = props.store.getState();
	return (
			  <div className={s.AppDialogs}>
				  <h2 className={s.AppDialogsTitle}>
					 Dialogs
				  </h2>
				  <div className={s.AppDialogsContent}>
					  <Contacts contactsData={state.dialogsPage.contactsData} />
					  <MessagesContainer store={props.store}/>
				  </div>
			  </div>
	);
}

export default DialogsPage ;
