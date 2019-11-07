import React, {Component} from 'react';
import s from './ProfilePage.module.css'
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfilePageContainer extends Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId
		}
		this.props.getUserProfile(userId)
		this.props.getUserStatus(userId)
	}

	render() {

		return (
			<div className={s.AppProfileContainer}>
				<ProfilePage {...this.props}
							 profile={this.props.profile}
							 status={this.props.status}
							 updateUserStatus={this.props.updateUserStatus}/>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.isAuth
})

let dispatchObj = {
	getUserProfile,
	getUserStatus,
	updateUserStatus
}

export default compose(
	connect(mapStateToProps, dispatchObj),
	withRouter,
    // withAuthRedirect
)(ProfilePageContainer);
