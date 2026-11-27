export default function DeviceCard({device, onDelete, onEdit}){
    return (
        <article className="device-card">
            <h2>{device.name}</h2>
            <p>Platform: {device.platform}</p>
            <div className="actions">
                <button className="danger" onClick={()=>onDelete(device.id)}>Delete</button>
                <button onClick={()=>onEdit(device.id)}>Edit</button>
            </div>
        </article>
    )
}