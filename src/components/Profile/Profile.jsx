import React from "react";
import ProfileStatus from './ProfileStatus.jsx';
import Preloader from "../common/preloader/Preloader.jsx";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }
    

    return (
        <>
            <img src={props.profile.photos.large} />
            <ProfileStatus status={'Hello, it`s first status.'}/>
            <div>Обо мне: {props.profile.aboutMe}</div>
        </>
    );
};
export default Profile;
  
