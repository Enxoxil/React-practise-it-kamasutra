import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks.jsx";
import Preloader from "../common/preloader/Preloader.jsx";
import { reduxForm, Field } from "redux-form";
import {
    required,
    maxLengthCreator,
} from "../../utils/validators/validator.js";
import { Textarea } from "../common/FormsControls/FormsControls.jsx";
import userPhoto from "../../assets/img/user.png";
import style from "./Profile.module.scss";
let maxLength100 = maxLengthCreator(100);

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };
    let postsElements = props.posts.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} />
    ));
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };
    return (
        <>
            <div>
                <img
                    src={props.profile.photos.large || userPhoto}
                    className={style.mainPhoto}
                />
                {props.isOwner && (
                    <input type={"file"} onChange={onMainPhotoSelected} />
                )}
                <p>
                    Мой ID:{" "}
                    {props.match.params.userId || props.authorizedUserId}
                </p>
                <div>
                    <b>ФИО </b>: {props.profile.fullName}
                </div>
                <div>
                    <b>Ищу работу?</b> :{" "}
                    {props.profile.lookingForAJob ? "Yes" : "No"}
                </div>
                {props.profile.lookingForAJob && (
                    <div>
                        <b>Мои скилы</b> :{" "}
                        {props.profile.lookingForAJobDescription}
                    </div>
                )}
                <div>
                    <b>О себе</b> : {props.profile.aboutMe}
                </div>

                <div>
                    <b>Контакты </b>:{" "}
                    {Object.keys(props.profile.contacts).map((key) => {
                        return (
                            <Contacts
                                key={key}
                                contactTitle={key}
                                contactValue={props.profile.contacts[key]}
                            />
                        );
                    })}
                </div>
            </div>

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

const Contacts = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}</b> : {contactValue} .
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
