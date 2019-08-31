import React from 'react';
import s from './User.module.css'

const User = () => {
	return (
			  <div className={s.AppProfileUser}>
				  <div className={s.AppProfileUserAvatar}>
					  <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2538-CUSA05620_00-AV00000000000069/1563898311000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
							 alt=""/>
				  </div>
				  <div className={s.AppProfileUserInfo}>
					  <h2 className={s.AppProfileUserName}>
						  Peter P.
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
