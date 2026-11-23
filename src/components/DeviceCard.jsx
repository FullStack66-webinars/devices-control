import {OnDeleteButton} from "./OnDeleteButton.jsx";
import {OnEditButton} from "./OnEditButton.jsx";

export default function DeviceCard({device, onDelete, onEdit}) {
    return (
        <article className="device-card">
            <h2>{device.name}</h2>
            <p>Platform: {device.platform}</p>
            <div className="actions">
                <OnDeleteButton onClick={() => onDelete(device.id)}/>
                <OnEditButton onClick={() => onEdit(device)}/>
            </div>

        </article>
    )
}