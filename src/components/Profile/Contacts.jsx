import React from "react";

export const Contacts = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}</b> : {contactValue} .
        </div>
    );
};

