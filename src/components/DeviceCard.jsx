import {useState} from "react";

export default function DeviceCard({device, deleteDevice, editDevice}) {
    const [isEditing, setIsEditing] = useState(false);
    const [draftName, setDraftName] = useState(device.name);
    const [errorName, setErrorName] = useState('');

    function handleSaveClick() {
        const newName = draftName.trim();
        const error = editDevice(device.id, newName);
        if (error) {
            setErrorName(error);
            return;
        }
        setDraftName(newName);
        setErrorName('');
        setIsEditing(false);
    }

    function handleCancelClick() {
        setDraftName(device.name);
        setErrorName('');
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
            {errorName && <p className='error'>{errorName}</p>}
            <p>Platform: {device.platform}</p>
            <div className='actions'>
                <button disabled={isEditing} onClick={() => setIsEditing(true)}>Edit</button>
                <button className='danger' onClick={() => deleteDevice(device.id)}>Delete</button>
            </div>
        </article>
    )
}