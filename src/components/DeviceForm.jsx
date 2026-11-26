import {PLATFORMS} from "../constants/platforms.js";
import {useState} from "react";

export default function DeviceForm() {
    const [name, setName] = useState("");
    const [platform, setPlatform] = useState("Android");
    const [isActive, setIsActive] = useState(true);
    function handleSubmit(e) {
         e.preventDefault();
       const deviceData = {
           name,
           platform,
           isActive,
       };
        console.log(deviceData);
    }

    function handleNameChange(e) {
        console.log(e.target.value);
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}

            className="panel" aria-label="Register device">
            <p>
                <label htmlFor="device-name">
                    Device name{" "}
                    <input
                        type="text"
                        name="name"
                        id="device-name"
                    value={name}
                    onChange={handleNameChange}/>
                </label>
            </p>
            <p>
                <label>
                    Operating system{" "}
                    <select
                        name="platform"
                    value={platform}
                    onChange={event =>
                        setPlatform(event.target.value)}>
                        {PLATFORMS.map((platform) => (
                            <option key={platform} value={platform}>{platform}</option>
                        ))}
                    </select>
                </label>
            </p>
            <p>
                <label>
                    <input
                        type="checkbox"
                        name="isActive"
                    checked={isActive}
                        onChange={
                            event =>setIsActive(event.target.checked)}
                    /> Active
                </label>
            </p>
            <div className="actions">
                <button type="submit">Add device</button>
                <button type="button">Cancel</button>
            </div>
        </form>
    );
}
