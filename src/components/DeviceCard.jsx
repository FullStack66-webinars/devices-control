import {OnDeleteButton} from "./OnDeleteButton.jsx";

export default function DeviceCard({device, onDelete}) {
    return (
        <article className="device-card">
            <h2>{device.name}</h2>
            <p>Platform: {device.platform}</p>
            <OnDeleteButton onClick={() => onDelete(device.id)}/>
        </article>
    )
}