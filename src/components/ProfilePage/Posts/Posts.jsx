import React from 'react';
import s from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
	
	let posts = props.postsData.map(p => <Post text={p.text} likes={p.likes} id={p.id} dispatch={props.dispatch} />)
	
	let newPostElement = React.createRef();
	
	let onAddPostBtnClick = () => {
		props.dispatch({type: 'ADD-POST'})
	}
	
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
	}
	
	return (
			  <div className={s.AppProfilePosts}>
				  <h2 className={s.AppProfilePostsTitle}>
					  My Posts
				  </h2>
				  <div className={s.AppProfilePostsInput}>
					  <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} placeholder="your news..." />
				  </div>
				  <button onClick={onAddPostBtnClick} className={`${s.btn} ${s.AppProfilePostsBtn}`}>
					  Send
				  </button>
				  <div className={s.AppProfilePostsList}>
					  {posts}
				  </div>
			  </div>
	);
}

export default Posts;
