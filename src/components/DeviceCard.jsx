export default function DeviceCard({device, onDelete, onEdit, isEditing}){
    return (
        <article className="device-card">
            <h2>{device.name}</h2>
            <p>Platform: {device.platform}</p>
            <div className="actions">
                <button disabled={isEditing} className="danger" onClick={()=>onDelete(device.id)}>Delete</button>
                <button disabled={isEditing} onClick={()=>onEdit(device.id)}>Edit</button>
            </div>
        </article>
    )
}