import React from 'react';

const ProfilePage  = () => {
	return (
			  <div className="AppProfile">
				  <div className="AppProfileImg">
					  <img src="https://free4kwallpapers.com/uploads/originals/2019/06/04/astronaut-x--wallpaper.jpg" alt=""/>
				  </div>
				  <div className="AppProfileUser">
					  <div className="AppProfileUserAvatar">
						  <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2538-CUSA05620_00-AV00000000000069/1563898311000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000" alt=""/>
					  </div>
					  <div className="AppProfileUserInfo">
						  <h2 className="AppProfileUserName">
							  Peter P.
						  </h2>
						  <div className="AppProfileUserInfoItem">
							  Date of Birth: 2 January
						  </div>
						  <div className="AppProfileUserInfoItem">
							  City: New York
						  </div>
						  <div className="AppProfileUserInfoItem">
							  Education: PTU
						  </div>
						  <div className="AppProfileUserInfoItem">
							  WebSite: https://google.com
						  </div>
					  </div>
				  </div>
				  <div className="AppProfilePosts">
					  <h2 className="AppProfilePostsTitle">
						  My Posts
					  </h2>
					  <div className="AppProfilePostsInput">
						  <textarea name="postInput" id="" placeholder="your news..."></textarea>
					  </div>
					  <button className="btn AppProfilePostsBtn">
						  Send
					  </button>
					  <div className="AppProfilePostsList">
						  <div className="AppProfilePostsItem">
							  <div className="AppProfilePostsItemIcon">
								  <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2538-CUSA05620_00-AV00000000000069/1563898311000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000" alt=""/>
							  </div>
							  <div className="AppProfilePostsItemMessage">
								 Hey, why nobody loves me?
							  </div>
						  </div>
						  <div className="AppProfilePostsItem">
							  <div className="AppProfilePostsItemIcon">
								  <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2538-CUSA05620_00-AV00000000000069/1563898311000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000" alt=""/>
							  </div>
							  <div className="AppProfilePostsItemMessage">
								  It's our new program! Hey!
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
	);
}

export default ProfilePage ;
