import React from 'react'
import styles from './UserPage.module.css'
import * as axios from 'axios'
import userPhoto from '../../img/images.png'

class UsersPage extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={styles.UsersPage}>
                <div className={styles.UsersPagePaggination}>
                    {pages.map(page => {
                        return <div
                            className={this.props.currentPage === page ? `${styles.UsersPagePagginationItem} ${styles.sellectedPage}` : styles.UsersPagePagginationItem}
                            onClick={(e) => {
                                this.onPageChanged(page)
                            }}>{page}</div>
                    })}
                </div>
                {
                    this.props.users.map(u => (
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
                                            this.props.unfollow(u.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            this.props.follow(u.id)
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
}

export default UsersPage;