import { useState } from 'react'

function EditDeviceModal({device, onSave, onClose}) {
    const [name, setName] = useState(device.name);
    function hendleSubmit(e) {
        e.preventDefault();
        if (!name.trim()) {
            return;
        }
        onSave(device.id, name);
        onClose();
    }
    return (
        <form onSubmit={hendleSubmit}>
            <div>Редактируем: {name}
                <input type="text"
                       value={name}
                       onChange={(e) =>
                           setName(e.target.value)}/>
                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </div>
        </form>


    )
}

export default EditDeviceModal;