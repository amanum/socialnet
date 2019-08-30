import React from 'react';
import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";

const DialogsPage  = () => {
	return (
			  <div className="AppDialogs p20">
				  <h2 className="AppDialogsTitle">
					 Dialogs
				  </h2>
				  <div className="AppDialogsContent">
					  <Contacts />
					  <Messages />
				  </div>
			  </div>
	);
}

export default DialogsPage ;
