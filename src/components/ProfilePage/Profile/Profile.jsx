import React from 'react';
import s from './Profile.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile, status, updateUserStatus}) => {

	if (!profile) {
		return <Preloader/>
	}

	return (
			  <div className={s.AppProfilePageProfile}>
				  <div className={s.AppProfilePageProfileAvatar}>
					  <img src={profile.photos.large}
							 alt=""/>
				  </div>
				  <ProfileInfo fullName={profile.fullName} status={status} updateUserStatus={updateUserStatus}/>
			  </div>
	);
}

export default Profile;
