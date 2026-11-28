import {useState} from "react";
import {PLATFORMS} from "../constants/platforms.js";

export default function DeviceForm({onAdd, onCancel}) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        platform: PLATFORMS[0],
        isActive: true,
    });

    function handleSubmit(e) {
        e.preventDefault();
        setErrors(onAdd(formData));
    }

    function handleChange(event) {
        const {name, type, value, checked} = event.target;
        if (errors[name]) {setErrors((prev) => ({...prev, [name]: ""}));}
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
                <div>
                    <label htmlFor="device-name">Device name</label>{" "}
                    <input
                        id="device-name"
                        name="name"
                        type="text"
                        className={errors.name ? "input-error" : undefined}
                        placeholder="e.g. Work laptop"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {
                        errors.name && (
                            <p className="field-error">
                                {errors.name}
                            </p>
                        )
                    }
                </div>

                <div>
                    <label htmlFor="device-platform">Operating system</label>{" "}
                    <select
                        id="device-platform"
                        name="platform"
                        className={errors.platform ? "input-error" : undefined}
                        value={formData.platform}
                        onChange={handleChange}
                    >
                        {PLATFORMS.map((platform) => (
                            <option key={platform} value={platform}>
                                {platform}
                            </option>
                        ))}
                    </select>
                    {
                        errors.platform && (
                            <p className="field-error">
                                {errors.platform}
                            </p>
                        )
                    }
                </div>

                <div>
                    <input
                        id="device-active"
                        name="isActive"
                        type="checkbox"
                        checked={formData.isActive}
                        onChange={handleChange}
                    />{" "}
                    <label htmlFor="device-active">Active</label>
                    {
                        errors.isActive && (
                            <p className="field-error">
                                {errors.isActive}
                            </p>
                        )
                    }
                </div>

                <div className="actions">
                    <button type="submit">Add device</button>
                    <button onClick={onCancel} type="button">Cancel</button>
                </div>
            </form>
        </section>
    );
}
