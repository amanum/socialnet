import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    return (
        <div className={s.AppProfilePageProfileInfo}>
            <h2 className={s.AppProfilePageProfileName}>
                {props.fullName}
            </h2>
            <div className={s.AppProfilePageProfileInfoItem}>
                Date of Birth: 2 January
            </div>
            <div className={s.AppProfilePageProfileInfoItem}>
                City: New York
            </div>
            <div className={s.AppProfilePageProfileInfoItem}>
                Education: PTU
            </div>
            <div className={s.AppProfilePageProfileInfoItem}>
                WebSite: https://google.com
            </div>
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>
    );
}

export default ProfileInfo;
