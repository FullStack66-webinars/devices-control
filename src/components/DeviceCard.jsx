import {useState} from "react";
import {PLATFORMS} from "../constants/platforms.js";

export default function DeviceCard({device, deleteDevice, editDevice}) {
    const [isEditing, setIsEditing] = useState(false);
    const [draftName, setDraftName] = useState(device.name);
    const [draftPlatform, setDraftPlatform] = useState(device.platform);
    const [errors, setErrors] = useState({});

    function handleSaveClick() {
        const newName = draftName.trim()

        if (newName === "") {
            handleCancelClick()
            return;
        }
        const errorMessage = editDevice(device.id, newName, draftPlatform);
        if (Object.keys(errorMessage).length !== 0) {
            setErrors(errorMessage)
            return;
        }
        setErrors({});
        setDraftName(newName);
        setIsEditing(false);
    }

    function handleCancelClick() {
        setDraftName(device.name);
        setDraftPlatform(device.platform);
        setIsEditing(false);
        setErrors({})
    }

    return (
        <article className="device-card">
            {isEditing ?
                <input className='name-input' type="text" value={draftName} autoFocus
                       onKeyDown={(e) => {
                           if (e.key === 'Enter') handleSaveClick()
                           if (e.key === 'Escape') handleCancelClick()
                       }}
                       onChange={(e) => {
                           setErrors({})
                           setDraftName(e.target.value)
                       }}/> : <h2>{device.name}</h2>}
            {isEditing ?
                <p>
                    <label>
                        Operating system{" "}
                        <select
                            name="platform"
                            value={draftPlatform}
                            onChange={(e) =>
                                setDraftPlatform(e.target.value)}
                        >
                            {PLATFORMS.map((platform) => (
                                <option key={platform} value={platform}>{platform}</option>
                            ))}
                        </select>
                    </label>
                </p>
                : <p>Platform: {device.platform}</p>
            }
            {errors.name && <p className="error">{errors.name}</p>}

            <div className='actions'>
                {!isEditing ? <button onClick={() => setIsEditing(true)}>Edit</button>
                    : <button onClick={() => handleSaveClick()}>Save</button>}
                <button className='danger' onClick={() => deleteDevice(device.id)}>Delete</button>
            </div>
        </article>
    )
}