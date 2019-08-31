import React from 'react';
import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";
import s from './DialogsPage.module.css'

const DialogsPage  = () => {
	return (
			  <div className={s.AppDialogs}>
				  <h2 className={s.AppDialogsTitle}>
					 Dialogs
				  </h2>
				  <div className={s.AppDialogsContent}>
					  <Contacts />
					  <Messages />
				  </div>
			  </div>
	);
}

export default DialogsPage ;
