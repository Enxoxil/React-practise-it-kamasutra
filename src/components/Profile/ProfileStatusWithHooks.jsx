import React, { useState } from "react";

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const activateMode = () => {
        setEditMode(true);
    };
    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };
    return (
        <div>
            {!editMode ? (
                <div>
                    <span onDoubleClick={activateMode}>
                        {props.status || "No status"}
                    </span>
                </div>
            ) : (
                <div>
                    <input
                        onChange={onStatusChange}
                        onBlur={deactivateMode}
                        value={status}
                    />
                </div>
            )}
        </div>
    );
};

export default ProfileStatusWithHooks;
