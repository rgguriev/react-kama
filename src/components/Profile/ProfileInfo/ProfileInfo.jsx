import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div className={s.descriptionBlock}>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      <img src={profile.photos.large} alt="profilePhoto"/>
      ava + description
    </div>
  )
}

export default ProfileInfo;