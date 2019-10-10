import React from 'react';
import {onLikeBtnClickActionCreator} from "../../../../redux/profileReducer";
import Post from "./Post";

const PostContainer = (props) => {
	let onLikeBtnClick = (likesCount, id) => {
		props.store.dispatch(onLikeBtnClickActionCreator(likesCount, id))
	}
	
	return (
			  <Post onLikeBtnClick={onLikeBtnClick} text={props.text} likes={props.likes} id={props.id}/>
	);
};

export default PostContainer;
