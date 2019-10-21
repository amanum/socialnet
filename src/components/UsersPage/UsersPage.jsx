import React from 'react'
import styles from './UserPage.module.css'

const UsersPage = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 0,
                photoUrl: 'https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg',
                followed: true,
                fullName: "Dmitry",
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 1,
                photoUrl: 'https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg',
                followed: true,
                fullName: "Aman",
                status: 'I am a boss too',
                location: {city: 'Astana', country: 'Kazakhstan'}
            },
            {
                id: 2,
                photoUrl: 'https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg',
                followed: false,
                fullName: "Kirill",
                status: 'I am mad',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg',
                followed: false,
                fullName: "Yuliya",
                status: 'What a wonderful day',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.usersPhoto} alt=""/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default UsersPage;