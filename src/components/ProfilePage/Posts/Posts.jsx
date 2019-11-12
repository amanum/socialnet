import React from 'react';
import s from './Posts.module.css'
import PostContainer from './Post/PostContainer'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilites/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const Posts = React.memo(props => {
	let posts = [...props.postsData]
		.reverse()
		.map(p => <PostContainer key={p.id} text={p.text} likes={p.likes} id={p.id}
														addLike={props.addLike}/>)

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
});

const AddNewPostsForm = (props) => {
	return(
		<form onSubmit={props.handleSubmit}>
			<div className={s.AppProfilePostsInput}>
				<Field component={Textarea} name={'newPostText'} placeholder={'your news...'} validate={[required, maxLength10]}/>
			</div>
			<button className={`${s.btn} ${s.AppProfilePostsBtn}`}>
				Send
			</button>
		</form>
	)
}

const AddNewPostsFormRedux = reduxForm({form: 'addNewPostsForm'})(AddNewPostsForm)

export default Posts;
