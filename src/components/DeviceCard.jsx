import {useState} from "react";
import {PLATFORMS} from "../constants/platforms.js";

export default function DeviceCard({device, deleteDevice, editDevice}) {
    const [isEditing, setIsEditing] = useState(false);
    const [draftName, setDraftName] = useState(device.name);
    const [draftPlatform, setDraftPlatform] = useState(device.platform);

    function handleSaveClick() {
        const newName = draftName.trim()

        if (newName === "") {
            handleCancelClick()
            return;
        }

        editDevice(device.id, newName, draftPlatform);
        setDraftName(newName);
        setDraftPlatform(draftPlatform);
        setIsEditing(false);
    }

    function handleCancelClick() {
        setDraftName(device.name);
        setDraftPlatform(device.platform);
        setIsEditing(false);
    }

    return (
        <article className="device-card">
            {isEditing ?
                <input className='name-input' type="text" value={draftName} autoFocus
                       onKeyDown={(e) => {
                           if (e.key === 'Enter') handleSaveClick()
                           if (e.key === 'Escape') handleCancelClick()
                       }}
                       onChange={(e) =>
                           setDraftName(e.target.value)}/> : <h2>{device.name}</h2>}
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

            <div className='actions'>
                {!isEditing ? <button onClick={() => setIsEditing(true)}>Edit</button>
                    : <button onClick={() => handleSaveClick()}>Save</button>}
                <button className='danger' onClick={() => deleteDevice(device.id)}>Delete</button>
            </div>
        </article>
    )
}