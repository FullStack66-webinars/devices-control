import { useState } from "react";
import { PLATFORMS } from "../constants/platforms.js";

export default function DeviceForm({onAdd, onCansel}) {
    const [formData, setFormData] = useState({
        name: "",
        platform: PLATFORMS[0],
        isActive: true,
    });

    function handleSubmit(e) {
        e.preventDefault();
        onAdd(formData);
    }

    function handleChange(event) {
        const { name, type, value, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    return (
        <section className="panel" aria-labelledby="device-form-title">
            <h2 id="device-form-title">Add device</h2>
            <p className="muted">Enter the device details below.</p>

            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="device-name">Device name</label>{" "}
                    <input
                        id="device-name"
                        name="name"
                        type="text"
                        placeholder="e.g. Work laptop"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </p>

                <p>
                    <label htmlFor="device-platform">Operating system</label>{" "}
                    <select
                        id="device-platform"
                        name="platform"
                        value={formData.platform}
                        onChange={handleChange}
                    >
                        {PLATFORMS.map((platform) => (
                            <option key={platform} value={platform}>
                                {platform}
                            </option>
                        ))}
                    </select>
                </p>

                <p>
                    <input
                        id="device-active"
                        name="isActive"
                        type="checkbox"
                        checked={formData.isActive}
                        onChange={handleChange}
                    />{" "}
                    <label htmlFor="device-active">Active</label>
                </p>

                <div className="actions">
                    <button type="submit">Add device</button>
                    <button onClick={onCansel} type="button">Cancel</button>
                </div>
            </form>
        </section>
    );
}
