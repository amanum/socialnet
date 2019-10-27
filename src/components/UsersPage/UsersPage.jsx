import React from 'react';
import styles from "./UserPage.module.css";
import userPhoto from "../../img/images.png";

let UsersPage = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.UsersPage}>
            <div className={styles.UsersPagePaggination}>
                {pages.map(page => {
                    return <div
                        className={props.currentPage === page ? `${styles.UsersPagePagginationItem} ${styles.sellectedPage}` : styles.UsersPagePagginationItem}
                        onClick={(e) => {
                            props.onPageChanged(page)
                        }}>{page}</div>
                })}
            </div>
            {
                props.users.map(u => (
                    <div key={u.id} className={styles.userItem}>
                        <div className={styles.userLeft}>
                            <div className={styles.usersPhotoWrapper}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.usersPhoto}
                                     alt=""/>
                            </div>
                            <div className={styles.userLeftBtnWrapper}>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={styles.userName}>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </div>
                        <div className={styles.userRight}>
                            <div>
                                {'u.location.country'}
                            </div>
                            <div>
                                {'u.location.city'}
                            </div>
                        </div>
                    </div>))
            }
        </div>
    )
}

export default UsersPage