import React from "react";
import {
    createField,
    Input,
    Textarea,
} from "../common/FormsControls/FormsControls";
import { Contacts } from "./Contacts";
import style from "../common/FormsControls/FormsControls.module.scss";
import { reduxForm } from "redux-form";
const ProfileDataForm = ({ profile, handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <b>ФИО </b>: {createField("ФИО", "fullName", [], Input)}
            </div>
            <div>
                <b>Ищу работу?</b>
                {createField("", "lookingForAJob", [], Input, {
                    type: "checkbox",
                })}
            </div>

            <div>
                <b>Мои скилы</b> : {profile.lookingForAJobDescription}
                {createField(
                    "Мои скилы",
                    "lookingForAJobDescription",
                    [],
                    Textarea
                )}
            </div>
            <div>
                <b>О себе</b> : {profile.aboutMe}
                {createField("О себе", "aboutMe", [], Textarea)}
            </div>

            <div>
                <b>Контакты</b>:{" "}
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        <div key={key} className="contact">
                            <b>
                                {key} :{" "}
                                {createField(key, "contacts." + key, [], Input)}
                            </b>
                        </div>
                    );
                })}
            </div>
        </form>
    );
};

const ProfileDataFormReduxForm = reduxForm({ form: "profileEdit" })(
    ProfileDataForm
);

export default ProfileDataFormReduxForm;
