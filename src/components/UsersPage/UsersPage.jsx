import React from 'react';
import styles from "./UsersPage.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let UsersPage = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
    return (
        <div className={styles.UsersPage}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            <div>
                {
                    props.users.map(u => <User user={u}
                                               key={u.id}
                                               followingInProgress={props.followingInProgress}
                                               follow={props.follow}
                                               unfollow={props.unfollow}
                    />)
                }
            </div>
        </div>
    )
}

export default UsersPage