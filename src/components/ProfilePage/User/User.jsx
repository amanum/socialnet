import React from 'react';
import s from './User.module.css'
import Preloader from "../../common/Preloader/Preloader";

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
				  <div className={s.AppProfileUserInfo}>
					  <h2 className={s.AppProfileUserName}>
						  {props.profile.fullName}
					  </h2>
					  <div className={s.AppProfileUserInfoItem}>
						  Date of Birth: 2 January
					  </div>
					  <div className={s.AppProfileUserInfoItem}>
						  City: New York
					  </div>
					  <div className={s.AppProfileUserInfoItem}>
						  Education: PTU
					  </div>
					  <div className={s.AppProfileUserInfoItem}>
						  WebSite: https://google.com
					  </div>
				  </div>
			  </div>
	);
}

export default User;
