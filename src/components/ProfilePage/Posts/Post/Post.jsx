import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
	debugger
	return (
			  <div className={s.AppProfilePostsItem}>
				  <div className={s.AppProfilePostsItemIcon}>
					  <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2538-CUSA05620_00-AV00000000000069/1563898311000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
							 alt=""/>
				  </div>
				  <div className={s.AppProfilePostsItemMessage}>
					  {props.text}
				  </div>
			  </div>
	);
}

export default Post;
