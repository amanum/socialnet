import React from 'react';
import s from './UserInfo.module.css'
import UserStatus from "./UserStatus/UserStatus";
import UserStatusWithHooks from "./UserStatus/UserStatusWithHooks";

const UserInfo = (props) => {
    return (
        <div className={s.AppProfileUserInfo}>
            <h2 className={s.AppProfileUserName}>
                {props.fullName}
            </h2>
            <div className={s.AppProfileUserInfoItem}>
                Date of Birth: 2 January
            </div>
            <div className={s.AppProfileUserInfoItem}>
                City: New York
            </div>
            <div className={s.AppProfileUserInfoItem}>
                Education: PTU
            </div>
            <div className={s.AppProfileUserInfoItem}>
                WebSite: https://google.com
            </div>
            {/*<UserStatus status={props.status} updateUserStatus={props.updateUserStatus}/>*/}
            <UserStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>
    );
}

export default UserInfo;
