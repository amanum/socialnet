import React from 'react';
import s from './Posts.module.css'
import PostContainer from './Post/PostContainer'
import {Field, reduxForm} from "redux-form";

const Posts = (props) => {

	let posts = props.postsData.map(p => <PostContainer key={p.id} text={p.text} likes={p.likes} id={p.id} addLike={props.addLike} />)

	let addPost = (values) => {
		props.addPost(values.newPostText)
	}
	
	return (
			  <div className={s.AppProfilePosts}>
				  <h2 className={s.AppProfilePostsTitle}>
					  My Posts
				  </h2>
				  <AddNewPostsFormRedux onSubmit={addPost}/>
				  <div className={s.AppProfilePostsList}>
					  {posts}
				  </div>
			  </div>
	);
}

const AddNewPostsForm = (props) => {
	return(
		<form onSubmit={props.handleSubmit}>
			<div className={s.AppProfilePostsInput}>
				<Field component={'textarea'} name={'newPostText'} placeholder={'your news...'}/>
			</div>
			<button className={`${s.btn} ${s.AppProfilePostsBtn}`}>
				Send
			</button>
		</form>
	)
}

const AddNewPostsFormRedux = reduxForm({form: 'addNewPostsForm'})(AddNewPostsForm)

export default Posts;
