import React, {Component} from 'react';
import s from './ProfilePage.module.css'
import ProfilePage from "./ProfilePage";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";

class ProfilePageContainer extends Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, dispatchObj)(ProfilePageContainer) ;
