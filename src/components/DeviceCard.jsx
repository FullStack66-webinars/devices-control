import { useState } from "react";

export default function DeviceCard({ device, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedDevice, setSelectedDevice] = useState(device.name)
    const devicePlatforms = {
        Phone: "Android",
        iPhone: "iOS",
        "Work laptop": "Linux",
        iPad: "iOS",
        Comp: "Windows"
    };
    function handleSave() {
        const newPlatform = devicePlatforms[selectedDevice];
        onUpdate(device.id, selectedDevice, newPlatform);
        setIsEditing(false);   // ← закрываем форму
    }
    function handleCancel() {
        setSelectedDevice(device.name);
        setIsEditing(false);
    }


    return (
        <article className="device-card">
            {isEditing ? (
                <div className="panel">
                    <h3>Edit device</h3>
                    <select
                        value={selectedDevice}
                        onChange={(event) => setSelectedDevice(event.target.value)}
                    >
                        <option value="Phone">Phone</option>
                        <option value="iPhone">iPhone</option>
                        <option value="Work laptop">Work laptop</option>
                        <option value="iPad">iPad</option>
                        <option value="Comp">Comp</option>
                    </select>
                    <div className="actions">
                        <button className="secondary" onClick={handleCancel}>
                            Cancel
                        </button>
                        <button className="save" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <h2>{device.name}</h2>
                    <p>Platform: {device.platform}</p>
                    <div className="actions">
                        <button className="btn-edit" onClick={() => setIsEditing(true)}>
                            Edit
                        </button>

                        <button className="btn-delete danger" onClick={() => onDelete(device.id)}>
                            Delete
                        </button>
                    </div>
                </>
            )}
        </article>
    );
}