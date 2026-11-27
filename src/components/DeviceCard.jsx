import {useState} from "react";

export default function DeviceCard({device, deleteDevice, editDevice}) {
    const [isEditing, setIsEditing] = useState(false);
    const [draftName, setDraftName] = useState(device.name);
    const [errorName, setErrorName] = useState('');

    function handleEditClick() {
        setDraftName(device.name);
        setErrorName('');
        setIsEditing(true);
    }

    function handleSaveClick() {
        const error = editDevice(device.id, draftName);
        if (error) {
            setErrorName(error);
            return;
        }
        setIsEditing(false);
    }

    function handleCancelClick() {
        setIsEditing(false);
    }

    return (
        <article className="device-card">
            {isEditing ?
                <input className='name-input' type="text" value={draftName} autoFocus onBlur={handleSaveClick}
                       onKeyDown={(e) => {
                           if (e.key === 'Enter') handleSaveClick()
                           if (e.key === 'Escape') handleCancelClick()
                       }}
                       onChange={(e) => {
                           setDraftName(e.target.value);
                           setErrorName('');
                       }}/> : <h2>{device.name}</h2>}
            {isEditing && errorName && <p className='error'>{errorName}</p>}
            <p>Platform: {device.platform}</p>
            <div className='actions'>
                <button disabled={isEditing} onClick={handleEditClick}>Edit</button>
                <button className='danger' onClick={() => deleteDevice(device.id)}>Delete</button>
            </div>
        </article>
    )
}