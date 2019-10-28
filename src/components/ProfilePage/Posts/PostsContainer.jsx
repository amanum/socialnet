import React from 'react';
import {
	addLike,
	addPost, updateNewPostText
} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

// const PostsContainer = (props) => {
// 	let state = props.store.getState();
//
// 	let onAddPostBtnClick = () => {
// 		props.store.dispatch(onAddPostBtnClickActionCreator())
// 	}
//
// 	let onPostChange = (text) => {
// 		let action = onPostChangeActionCreator(text)
// 		props.store.dispatch(action)
// 	}
//
// 	return (
// 			  <Posts updateNewPostText={onPostChange}
// 					 addPost={onAddPostBtnClick}
// 					 postsData={state.profilePage.postsData}
// 					 newPostText={state.profilePage.newPostText}
// 					 store={props.store}
// 			  />
// 	);
// }

const mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText
	}
}

let dispatchObj = {
	updateNewPostText,
	addPost,
	addLike
}

const PostsContainer = connect(mapStateToProps, dispatchObj)(Posts)

export default PostsContainer;
