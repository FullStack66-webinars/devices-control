import DeviceCard from "./DeviceCard.jsx";

export default function DeviceList ({devices, deleteDevice, editDevice}) {
    if (devices.length === 0) {
        return <p className="muted">No devices found.</p>;
    }
    return (
        <div className="device-list">
            {devices.map((device) => (
                <DeviceCard
                key={device.id}
                device={device}
                deleteDevice={deleteDevice}
                editDevice={editDevice}
                />
            ))}

        </div>
    )

};