import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks.jsx";
import Preloader from "../common/preloader/Preloader.jsx";
import { reduxForm, Field } from "redux-form";
import {
    required,
    maxLengthCreator,
} from "../../utils/validators/validator.js";
import { Textarea } from "../common/FormsControls/FormsControls.jsx";

let maxLength5 = maxLengthCreator(5);

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
    return (
        <>
            <img src={props.profile.photos.large} />
            <ProfileStatusWithHooks
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <div>Обо мне: {props.profile.aboutMe}</div>
            <h4>My posts</h4>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div>{postsElements}</div>
        </>
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
                        validate={[required, maxLength5]}
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
