import { PLATFORMS } from "../constants/platforms.js";
import {useState} from "react";

export default function DeviceForm() {
    const [name, setName] = useState("");
    const [platform, setPlatform] = useState(PLATFORMS[0]);
    const [isActive, setIsActive] = useState(true);
    function handleSubmit(e) {
        e.preventDefault();
        const dataDevice = {
            name,
            platform,
            isActive,
        }
        console.log(dataDevice);
    }
    function handleNameChange(ev) {
        console.log(ev.target.value);
        setName(ev.target.value);
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
                        value={name}
                        onChange={handleNameChange}
                    />
                </p>

                <p>
                    <label htmlFor="device-platform">Operating system</label>{" "}
                    <select
                        name="platform"
                    value={platform}
                    onChange={event =>
                        setPlatform(event.target.value)}>
                        {PLATFORMS.map((platform) => (
                            <option key={platform} value={platform}>
                                {platform}
                            </option>
                        ))}
                    </select>
                </p>

                <p>
                    <input
                        checked={isActive}
                        name="isActive"
                        type="checkbox"
                        onChange={event =>
                    setIsActive(event.target.checked)}
                    />{" "}
                    <label htmlFor="device-active">Active</label>
                </p>

                <div className="actions">
                    <button type="submit">Add device</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </section>
    );
}
