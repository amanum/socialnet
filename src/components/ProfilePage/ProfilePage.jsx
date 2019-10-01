import React from 'react';
import User from "./User/User";
import Posts from "./Posts/Posts";
import s from './ProfilePage.module.css'

const ProfilePage  = (props) => {
	return (
			  <div className={s.AppProfile}>
				  <div className={s.AppProfileImg}>
					  <img src="https://free4kwallpapers.com/uploads/originals/2019/06/04/astronaut-x--wallpaper.jpg" alt=""/>
				  </div>
				  <User />
				  <Posts postsData={props.data.postsData}
							dispatch={props.dispatch}/>
			  </div>
	);
}

export default ProfilePage ;
