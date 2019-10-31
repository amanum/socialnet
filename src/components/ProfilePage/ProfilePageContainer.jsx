import React, {Component} from 'react';
import s from './ProfilePage.module.css'
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfilePageContainer extends Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {userId = 2}
		this.props.getUserProfile(userId)
	}

	render() {

		return (
			<div className={s.AppProfileContainer}>
				<ProfilePage {...this.props} profile={this.props.profile}/>
			</div>
		);
	}
}

let AuthRedirectComponent = withAuthRedirect(ProfilePageContainer)

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
})

let dispatchObj = {
	getUserProfile
}

let WithURLDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, dispatchObj)(WithURLDataContainerComponent);
