import React from 'react';
import s from './Messages.module.css'
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utilites/validators";

const maxLength100 = maxLengthCreator(100)

const Messages = (props) => {

    let messages = props.messagesData.map(m => <Message key={m.id} avatar={m.avatar} name={m.name}
                                                        message={m.message}/>)

	let addNewMessage = (values) => {
		props.addMessage(values.newMessageText)
	}

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.AppDialogsRight}>
            <ul className={s.AppDialogsMessages}>
                {messages}
            </ul>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.newMessage}>
                <Field component={Textarea} name={'newMessageText'} placeholder={'Enter your message'} validate={[required, maxLength100]}/>
                <button className={s.meSendBtn}>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'messagesAddMessageForm'})(AddMessageForm)

export default Messages;
