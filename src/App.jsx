import {useState} from 'react'

import './App.css'
import DeviceList from "./components/DeviceList.jsx";
import {initialDevices} from "./data/devices.js";
import DeviceEditForm from "./components/DeviceEditForm.jsx";

function App() {
    const [devices, setDevices] = useState(initialDevices);
    const [idDevice, setIdDevice] = useState(null);
    const isEditing = idDevice !== null;

    function handleDeleteDevice(id) {
        setDevices((prevDevices) =>
            prevDevices.filter(device => device.id !== id));
        if (id === idDevice) {
            setIdDevice(null);
        }
    }

    function handleEditDevice(id) {
        setIdDevice(id);
    }

    function cancelEditDevice() {
        setIdDevice(null);
    }

    const editingDevice = devices.find(device => device.id === idDevice);

    function handleSaveDevice(updatedDevice) {
        setDevices((prevDevices) =>
            prevDevices.map((device) => device.id === updatedDevice.id ? updatedDevice : device))
        setIdDevice(null);

    }


    return (
        <main className="page">
            <header>
                <p className="kicker">My devices lab</p>
                <h1>My devices</h1>

                <p className="muted">Control devices</p>
            </header>

            <p className="summary"> Number o devices: {devices.length}</p>
            <DeviceList
                devices={devices}
                onDelete={handleDeleteDevice}
                onEdit={handleEditDevice}
            isEditing={isEditing}/>
            {editingDevice &&
            <DeviceEditForm
                key={editingDevice.id}
                device={editingDevice}
                onSave={handleSaveDevice}
                onCancel={cancelEditDevice}/>}
        </main>
    )
}

export default App
