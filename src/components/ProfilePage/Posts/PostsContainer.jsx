import React from 'react';
import {
	addLike,
	addPost
} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText
	}
}

let dispatchObj = {
	addPost,
	addLike
}

const PostsContainer = connect(mapStateToProps, dispatchObj)(Posts)

export default PostsContainer;
