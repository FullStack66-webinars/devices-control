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

    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = onAdd(formData);
        setErrors(validationErrors);
    }

    function handleChange(event) {
        const {name, type, value, checked} = event.target;
        setFormData((previousData) => ({
            ...previousData,
            [name]: type === "checkbox" ? checked : value,
        }));
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
                    {errors.name && (
                        <span className="error">{errors.name}</span>
                    )}
                </label>
            </p>
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
                    {errors.platform && (
                        <span className="error">{errors.platform}</span>
                    )}
                </label>
            </p>
            <p>
                <label>
                    <input
                        type="checkbox"
                        name="isActive"
                        checked={formData.isActive}
                        onChange={handleChange}
                    /> Active
                    {errors.isActive && (
                        <span className="error">{errors.isActive}</span>
                    )}
                </label>
            </p>
            <div className="actions">
                <button type="submit">Add device</button>
                <button type="button"
                onClick={onCancel}
                >Cancel</button>
            </div>
        </form>
    );
}
