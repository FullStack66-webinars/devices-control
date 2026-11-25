import { useState } from 'react'

import './App.css'
import DeviceList from "./components/DeviceList.jsx";
import { initialDevices } from "./data/devices.js";

function App() {

    const [devices, setDevices] = useState(initialDevices);

    function handleDelete(id) {
        const newDevices = devices.filter(device => device.id !== id);
        setDevices(newDevices);
    }

    function handleUpdate(id, newName, newPlatform) {
        const updatedDevices = devices.map(device =>
            device.id === id
                ? { ...device, name: newName, platform: newPlatform }
                : device
        );
        setDevices(updatedDevices);
    }

    return (
        <main className="page">
            <header>
                <p className="kicker">My devices lab</p>
                <h1>My devices</h1>

                <p className="muted">Control devices</p>
            </header>

            <p className="summary">Number of devices: {devices.length}</p>
            <DeviceList devices={devices} onDelete={handleDelete} onUpdate={handleUpdate} />
        </main>
    )
}

export default App