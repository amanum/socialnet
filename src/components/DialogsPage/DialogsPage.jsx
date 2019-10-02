import React from 'react';
import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";
import s from './DialogsPage.module.css'

const DialogsPage  = (props) => {
	return (
			  <div className={s.AppDialogs}>
				  <h2 className={s.AppDialogsTitle}>
					 Dialogs
				  </h2>
				  <div className={s.AppDialogsContent}>
					  <Contacts contactsData={props.dialogsPageState.contactsData} />
					  <Messages messagesData={props.dialogsPageState.messagesData}
									dispatch={props.dispatch}/>/>
				  </div>
			  </div>
	);
}

export default DialogsPage ;
