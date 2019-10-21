import React from 'react';
import {
	onAddPostBtnClickActionCreator,
	onLikeBtnClickActionCreator,
	onPostChangeActionCreator
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

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			let action = onPostChangeActionCreator(text)
			dispatch(action)
		},
		addPost: () => {
			dispatch(onAddPostBtnClickActionCreator())
		},
		addLike: (likesCount, id) => {

			let action = onLikeBtnClickActionCreator(likesCount, id)
			dispatch(action)
		}
	}
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
