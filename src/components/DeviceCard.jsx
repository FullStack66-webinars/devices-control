import {useState} from "react";

export default function DeviceCard({device, deleteDevice, correctDevice}){
    const [isEditing, setIsEditing] = useState(false);
    const [draftName, setDraftName] = useState(device.name);

    function handleSaveClick(){
        const newName = draftName.trim()
        if (newName === ""){
            setDraftName(device.name)
            setIsEditing(false)
            return;
        }
        setDraftName(newName);
        correctDevice(device.id, newName);
        setIsEditing(false);
    }

    return (
        <article className="device-card">
            {isEditing ?
                <input className='name-input' type="text" value={draftName} autoFocus onBlur={handleSaveClick}
                       onKeyDown={(e) => e.key === "Enter" && handleSaveClick()}
                       onChange={(e) => setDraftName(e.target.value)} /> :
                <h2>{device.name}</h2>}
            <p>Platform: {device.platform}</p>
            <div className='actions'>
            <button onClick={() => setIsEditing(true)}>Correct</button>
            <button className='danger' onClick={() => deleteDevice(device.id)}>Delete</button>
            </div>
        </article>
    )
}