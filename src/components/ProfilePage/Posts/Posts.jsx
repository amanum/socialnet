import React from 'react';
import s from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
	let posts = props.postsData.map(p => <Post text={p.text} />)
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
					  {posts}
				  </div>
			  </div>
	);
}

export default Posts;
