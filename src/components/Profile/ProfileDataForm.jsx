import React from "react";
import {
    createField,
    Input,
    Textarea,
} from "../common/FormsControls/FormsControls";
import { Contacts } from "./Contacts";
import { reduxForm } from "redux-form";
const ProfileDataForm = ({ profile, goToEditMode, isOwner }) => {
    return (
        <form>
            {isOwner && (
                <div>
                    <button onClick={() => {}}>Save</button>
                </div>
            )}
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
                {createField(
                    "О себе",
                    "aboutMe",
                    [],
                    Textarea
                )}
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
        </form>
    );
};

const ProfileDataFormReduxForm = reduxForm({ form: "profileEdit" })(
    ProfileDataForm
);

export default ProfileDataFormReduxForm;
