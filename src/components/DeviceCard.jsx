import {useRef, useState} from "react";

export default function DeviceCard({device, deleteDevice, editDevice}) {
    const [isEditing, setIsEditing] = useState(false);
    const [draftName, setDraftName] = useState(device.name);
    const [editError, setEditError] = useState("");
    const skipBlurRef = useRef(false);

    function handleEditClick() {
        skipBlurRef.current = false;
        setDraftName(device.name);
        setEditError("");
        setIsEditing(true);
    }

    function handleSaveClick() {
        const error = editDevice(device.id, draftName);
        if (error) {
            setEditError(error);
            return;
        }

        skipBlurRef.current = true;
        setDraftName(draftName.trim());
        setEditError("");
        setIsEditing(false);
    }

    function handleCancelClick() {
        skipBlurRef.current = true;
        setDraftName(device.name);
        setEditError("");
        setIsEditing(false);
    }

    function handleBlur() {
        if (skipBlurRef.current) {
            skipBlurRef.current = false;
            return;
        }
        handleSaveClick();
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSaveClick();
        }
        if (event.key === "Escape") {
            event.preventDefault();
            handleCancelClick();
        }
    }

    function handleNameChange(event) {
        setDraftName(event.target.value);
        if (editError) {
            setEditError("");
        }
    }

    const errorId = `device-edit-error-${device.id}`;

    return (
        <article className="device-card">
            {isEditing ? (
                <div className="edit-name-field">
                    <input
                        className="name-input"
                        type="text"
                        value={draftName}
                        autoFocus
                        aria-label="Edit device name"
                        aria-invalid={Boolean(editError)}
                        aria-describedby={editError ? errorId : undefined}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        onChange={handleNameChange}
                    />
                    {editError && (
                        <p id={errorId} className="field-error" role="alert">
                            {editError}
                        </p>
                    )}
                </div>
            ) : (
                <h2>{device.name}</h2>
            )}
            <p>Platform: {device.platform}</p>
            <p>Status: {device.isActive ? "Active" : "Inactive"}</p>
            <div className="actions">
                <button type="button" disabled={isEditing} onClick={handleEditClick}>
                    Edit
                </button>
                {isEditing && (
                    <button
                        type="button"
                        className="secondary"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </button>
                )}
                <button
                    type="button"
                    className="danger"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => deleteDevice(device.id)}
                >
                    Delete
                </button>
            </div>
        </article>
    );
}