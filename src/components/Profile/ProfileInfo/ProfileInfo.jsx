import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.descriptionBlock}>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      <img src={props.profile.photos.large} />
      ava + description
    </div>
  )
}

export default ProfileInfo;