export default function DeviceCard({device}){
    return (
        <article className="device-card">
            <h2>{device.name}</h2>
            <p>Platform: {device.platform}</p>
        </article>
    )
}