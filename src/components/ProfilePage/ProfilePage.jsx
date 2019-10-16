import React from 'react';
import User from "./User/User";
import s from './ProfilePage.module.css'
import PostsContainer from "./Posts/PostsContainer";

const ProfilePage  = (props) => {
	return (
			  <div className={s.AppProfile}>
				  <div className={s.AppProfileImg}>
					  <img src="https://free4kwallpapers.com/uploads/originals/2019/06/04/astronaut-x--wallpaper.jpg" alt=""/>
				  </div>
				  <User />
				  <PostsContainer/>
			  </div>
	);
}

export default ProfilePage ;
