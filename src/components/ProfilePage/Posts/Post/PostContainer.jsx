import React from 'react';
import Post from "./Post";

const PostContainer = (props) => {

	let onLikeBtnClick = () => {
		props.addLike(props.likes, props.id)
	}

	return (
			  <Post onLikeBtnClick={onLikeBtnClick} text={props.text} likes={props.likes} id={props.id}/>
	);
};

// let mapStateToProps = (state) => {
// 	debugger
// 	return {
// 		text: state.text,
// 		likes: state.likes,
// 		id: state.id
// 	}
// }
//
// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		onLikeBtnClick: (likesCount, id) => {
// 			dispatch(onLikeBtnClickActionCreator(likesCount, id))
// 		}
// 	}
// }
//
// const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer;
