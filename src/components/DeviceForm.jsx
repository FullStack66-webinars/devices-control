import { PLATFORMS } from "../constants/platforms.js";

export default function DeviceForm() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e, "handleSubmit");
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
                    />
                </p>

                <p>
                    <label htmlFor="device-platform">Operating system</label>{" "}
                    <select id="device-platform" name="platform">
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
