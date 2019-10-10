import React from 'react';
import {onAddPostBtnClickActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
	let state = props.store.getState();
	
	let onAddPostBtnClick = () => {
		props.store.dispatch(onAddPostBtnClickActionCreator())
	}
	
	let onPostChange = (text) => {
		let action = onPostChangeActionCreator(text)
		props.store.dispatch(action)
	}
	
	return (
			  <Posts updateNewPostText={onPostChange}
					 addPost={onAddPostBtnClick}
					 postsData={state.profilePage.postsData}
					 newPostText={state.profilePage.newPostText}
					 store={props.store}
			  />
	);
}

export default PostsContainer;
