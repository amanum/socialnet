import React from 'react';
import s from './UserInfo.module.css'
import UserStatus from "./UserStatus/UserStatus";

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
            <UserStatus status={'hello'}/>
        </div>
    );
}

export default UserInfo;
