import React from 'react';
import {connect} from 'react-redux';
import {
    follow, getUsers,
    setCurrentPage, toggleFollowingProgress,
    unfollow
} from '../../redux/usersReducer';
import UsersPage from './UsersPage';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersPageContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <UsersPage totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           users={this.props.users}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           toggleFollowingProgress={this.props.toggleFollowingProgress}
                           followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let dispatchObj = {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, dispatchObj)
)(UsersPageContainer)