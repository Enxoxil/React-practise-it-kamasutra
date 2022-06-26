import React, { useState } from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks.jsx";
import Preloader from "../common/preloader/Preloader.jsx";
import ProfileDataForm from "./ProfileDataForm.jsx";
import { reduxForm, Field } from "redux-form";
import {
    required,
    maxLengthCreator,
} from "../../utils/validators/validator.js";
import { Textarea } from "../common/FormsControls/FormsControls.jsx";
import userPhoto from "../../assets/img/user.png";
import style from "./Profile.module.scss";
import { Contacts } from "./Contacts";
let maxLength100 = maxLengthCreator(100);

const Profile = (props) => {
    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />;
    }
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };
    let postsElements = props.posts.map((p) => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ));
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)
        });
    };
    return (
        <>
            <img
                src={props.profile.photos.large || userPhoto}
                className={style.mainPhoto}
            />
            <p>Мой ID: {props.match.params.userId || props.authorizedUserId}</p>
            {props.isOwner && (
                <input type={"file"} onChange={onMainPhotoSelected} />
            )}
            {editMode ? (
                <ProfileDataForm
                    initialValues={props.profile}
                    profile={props.profile}
                    onSubmit={onSubmit}
                />
            ) : (
                <ProfileData
                    profile={props.profile}
                    isOwner={props.isOwner}
                    goToEditMode={() => {
                        setEditMode(true);
                    }}
                />
            )}

            <ProfileStatusWithHooks
                status={props.status}
                updateStatus={props.updateStatus}
            />

            <h4>My posts</h4>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div>{postsElements}</div>
        </>
    );
};

const ProfileData = ({ profile, goToEditMode, isOwner }) => {
    return (
        <div>
            {isOwner && (
                <div>
                    <button onClick={goToEditMode}>Edit mode</button>
                </div>
            )}
            <div>
                <b>ФИО </b>: {profile.fullName}
            </div>
            <div>
                <b>Ищу работу?</b> : {profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {profile.lookingForAJob && (
                <div>
                    <b>Мои скилы</b> : {profile.lookingForAJobDescription}
                </div>
            )}
            <div>
                <b>О себе</b> : {profile.aboutMe}
            </div>

            <div>
                <b>Контакты </b>:{" "}
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        <Contacts
                            key={key}
                            contactTitle={key}
                            contactValue={profile.contacts[key]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const AddNewPostForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={Textarea}
                        name={"newPostText"}
                        validate={[required, maxLength100]}
                        placeholder="Post message"
                    />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        </>
    );
};

const Post = (props) => {
    return (
        <>
            <div>Text: {props.message}</div>
            <div>Likes: {props.likesCount}</div>
        </>
    );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
    AddNewPostForm
);

export default Profile;
