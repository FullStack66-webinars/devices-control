import {useState} from "react";

export default function DeviceEditForm({device, onSave, onCancel}) {
    const [name, setName] = useState(device.name);
    function handleSubmit(e) {
        e.preventDefault();
        const trimmedName = name.trim();
        if (!trimmedName) {
            return;
        }
        onSave({...device, name: trimmedName});
    }
    return (
            <form className="panel" onSubmit={handleSubmit}>
                <input value={name} onChange={(e) =>
                    setName(e.target.value)} type="text" />
                <div className="actions">
                    <button type="button" onClick={onCancel}>Cancel</button>
                    <button type="submit">Save</button>
                </div>

            </form>
        )

}