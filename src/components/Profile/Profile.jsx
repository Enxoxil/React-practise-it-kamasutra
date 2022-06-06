import React from "react";

import Preloader from "../common/preloader/Preloader.jsx";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }
    

    return (
        <>
            <img src={props.profile.photos.large} />
            <div>Обо мне: {props.profile.aboutMe}</div>
        </>
    );
};
export default Profile;
  