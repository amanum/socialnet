import React from 'react';
import s from './User.module.css'
import Preloader from "../../common/Preloader/Preloader";
import UserInfo from "./UserInfo/UserInfo";

const User = (props) => {

	if (!props.profile) {
		return <Preloader/>
	}

	return (
			  <div className={s.AppProfileUser}>
				  <div className={s.AppProfileUserAvatar}>
					  <img src={props.profile.photos.large}
							 alt=""/>
				  </div>
				  <UserInfo fullName={props.profile.fullName} status={props.status} updateUserStatus={props.updateUserStatus}/>
			  </div>
	);
}

export default User;
