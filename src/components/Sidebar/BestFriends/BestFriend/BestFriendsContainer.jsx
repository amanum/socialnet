import React from 'react';
import {connect} from "react-redux";
import BestFriends from "../BestFriends";

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
		bestFriendsData: state.sidebar.bestFriendsData
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

const BestFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(BestFriends)

export default BestFriendsContainer;
