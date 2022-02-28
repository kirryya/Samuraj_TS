import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://storge.pic2.me/c/1360x800/323/582b0f346f341.jpg"
                     alt="background"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;