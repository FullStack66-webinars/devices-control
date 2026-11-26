import {PLATFORMS} from "../constants/platforms.js";

export default function DeviceForm() {
    function handleSubmit(e) {
        console.log(e, "handleSubmit");
    }

    return (
        <form onSubmit={handleSubmit}

            className="panel" aria-label="Register device">
            <p>
                <label htmlFor="device-name">
                    Device name{" "}
                    <input type="text" name="name" id="device-name"/>
                </label>
            </p>
            <p>
                <label>
                    Operating system{" "}
                    <select name="platform">
                        {PLATFORMS.map((platform) => (
                            <option key={platform} value={platform}>{platform}</option>
                        ))}
                    </select>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" name="isActive" /> Active
                </label>
            </p>
            <div className="actions">
                <button type="submit">Add device</button>
                <button type="button">Cancel</button>
            </div>
        </form>
    );
}
