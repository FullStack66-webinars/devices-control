import {PLATFORMS} from "../constants/platforms.js";
import {useState} from "react";

export default function DeviceForm({
                                       onAdd,
    onCancel,
}) {
    const [formData, setFormData] = useState({
        name: "",
        platform: "Android",
        isActive: true,
    });
    const [errorsMessage, setErrorsMessage] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        const errorsFromData = onAdd(formData);
        if (errorsFromData) {
            setErrorsMessage(errorsFromData);
        }
    }

    function handleChange(event) {
        const {name, type, value, checked} = event.target;
        setFormData((previousData) => ({
            ...previousData,
            [name]: type === "checkbox" ? checked : value,
        }));
        setErrorsMessage((previousErrors) => ({...previousErrors, [name]: undefined}));
    }

    return (
        <form onSubmit={handleSubmit} className="panel" aria-label="Register device">
            <p>
                <label htmlFor="device-name">
                    Device name{" "}
                    <input
                        type="text"
                        name="name"
                        id="device-name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
            </p>
            {errorsMessage.name && <p className="error">{errorsMessage.name}</p>}
            <p>
                <label>
                    Operating system{" "}
                    <select
                        name="platform"
                        value={formData.platform}
                        onChange={handleChange}
                    >
                        {PLATFORMS.map((platform) => (
                            <option key={platform} value={platform}>{platform}</option>
                        ))}
                    </select>
                </label>
            </p>
            {errorsMessage.platform && <p className="error">{errorsMessage.platform}</p>}
            <p>
                <label>
                    <input
                        type="checkbox"
                        name="isActive"
                        checked={formData.isActive}
                        onChange={handleChange}
                    /> Active
                </label>
            </p>
            {errorsMessage.isActive && <p className="error">{errorsMessage.isActive}</p>}
            <div className="actions">
                <button type="submit">Add device</button>
                <button type="button"
                onClick={onCancel}
                >Cancel</button>
            </div>
        </form>
    );
}
