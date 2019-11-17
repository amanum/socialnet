import React from 'react';
import styles from "./UsersPage.module.css";
import userPhoto from "../../img/images.png";
import {NavLink} from "react-router-dom";

let UsersPage = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={styles.userItem}>
            <div className={styles.userLeft}>
                <div className={styles.usersPhotoWrapper}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.usersPhoto}
                             alt=""/>
                    </NavLink>
                </div>
                <div className={styles.userLeftBtnWrapper}>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>
                            Unfollow
                        </button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Follow
                        </button>
                    }
                </div>
            </div>
            <div className={styles.userName}>
                <div>
                    {user.name}
                </div>
                <div>
                    {user.status}
                </div>
            </div>
            <div className={styles.userRight}>
                <div>
                    {'user.location.country'}
                </div>
                <div>
                    {'user.location.city'}
                </div>
            </div>
        </div>)
}

export default UsersPage