import React, {Component} from 'react';
import s from './ProfilePage.module.css'
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {watchProfile} from "../../api/api";

class ProfilePageContainer extends Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {userId = 2}
		watchProfile(userId)
			.then(data => {
				this.props.setUserProfile(data)
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
