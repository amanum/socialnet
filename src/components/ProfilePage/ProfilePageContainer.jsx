import React, {Component} from 'react';
import s from './ProfilePage.module.css'
import ProfilePage from "./ProfilePage";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfilePageContainer extends Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {userId = 2}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				this.props.setUserProfile(response.data)
			})
	}

	render() {
		return (
			<div className={s.AppProfileContainer}>
				<ProfilePage {...this.props} profile={this.props.profile}/>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
})

let dispatchObj = {
	setUserProfile
}

let WithURLDataContainerComponent = withRouter(ProfilePageContainer)

export default connect(mapStateToProps, dispatchObj)(WithURLDataContainerComponent) ;
