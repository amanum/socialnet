import React from 'react';
import s from './Posts.module.css'

const Posts = () => {
	return (
			  <div className={s.AppProfilePosts}>
				  <h2 className={s.AppProfilePostsTitle}>
					  My Posts
				  </h2>
				  <div className={s.AppProfilePostsInput}>
					  <textarea name="postInput" id="" placeholder="your news..."></textarea>
				  </div>
				  <button className={`${s.btn} ${s.AppProfilePostsBtn}`}>
					  Send
				  </button>
				  <div className={s.AppProfilePostsList}>
					  <div className={s.AppProfilePostsItem}>
						  <div className={s.AppProfilePostsItemIcon}>
							  <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2538-CUSA05620_00-AV00000000000069/1563898311000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
									 alt=""/>
						  </div>
						  <div className={s.AppProfilePostsItemMessage}>
							  Hey, why nobody loves me?
						  </div>
					  </div>
					  <div className={s.AppProfilePostsItem}>
						  <div className={s.AppProfilePostsItemIcon}>
							  <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2538-CUSA05620_00-AV00000000000069/1563898311000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
									 alt=""/>
						  </div>
						  <div className={s.AppProfilePostsItemMessage}>
							  It's our new program! Hey!
						  </div>
					  </div>
				  </div>
			  </div>
	);
}

export default Posts;
