import {PLATFORMS} from "../constants/platforms.js";
import {useState} from "react";

const INITIAL_FORM_DATA = {
    name: "",
    platform: PLATFORMS[0],
    isActive: true,
};

export default function DeviceForm({
    onAdd,
    onCancel,
}) {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = onAdd(formData) ?? {};
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setFormData(INITIAL_FORM_DATA);
    }

    function handleChange(event) {
        const {name, type, value, checked} = event.target;
        setFormData((previousData) => ({
            ...previousData,
            [name]: type === "checkbox" ? checked : value,
        }));
        setErrors((previousErrors) => {
            if (!previousErrors[name]) {
                return previousErrors;
            }
            const nextErrors = {...previousErrors};
            delete nextErrors[name];
            return nextErrors;
        });
    }

    return (
        <form onSubmit={handleSubmit} className="panel" aria-label="Register device" noValidate>
            <div className="form-field">
                <label htmlFor="device-name">
                    Device name{" "}
                    <input
                        type="text"
                        name="name"
                        id="device-name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "device-name-error" : undefined}
                    />
                </label>
                {errors.name && (
                    <p id="device-name-error" className="field-error" role="alert">
                        {errors.name}
                    </p>
                )}
            </div>
            <div className="form-field">
                <label htmlFor="device-platform">
                    Operating system{" "}
                    <select
                        name="platform"
                        id="device-platform"
                        value={formData.platform}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.platform)}
                        aria-describedby={errors.platform ? "device-platform-error" : undefined}
                    >
                        {PLATFORMS.map((platform) => (
                            <option key={platform} value={platform}>{platform}</option>
                        ))}
                    </select>
                </label>
                {errors.platform && (
                    <p id="device-platform-error" className="field-error" role="alert">
                        {errors.platform}
                    </p>
                )}
            </div>
            <div className="form-field">
                <label htmlFor="device-active">
                    <input
                        type="checkbox"
                        name="isActive"
                        id="device-active"
                        checked={formData.isActive}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.isActive)}
                        aria-describedby={errors.isActive ? "device-active-error" : undefined}
                    /> Active
                </label>
                {errors.isActive && (
                    <p id="device-active-error" className="field-error" role="alert">
                        {errors.isActive}
                    </p>
                )}
            </div>
            <div className="actions">
                <button type="submit">Add device</button>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
}
