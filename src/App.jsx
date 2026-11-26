import { useState } from 'react'
import './App.css'
import DeviceList from "./components/DeviceList.jsx";
import {initialDevices} from "./data/devices.js";
import DeviceForm from "./components/DeviceForm.jsx";
import {validateDeviceName} from "./utils/deviceValidation.js";


function App() {
    const [devices, setDevices] = useState(initialDevices);
    const [isFormOpen, setIsFormOpen] = useState(false);

    function editDevice(id, newName) {
        setDevices(prev => prev.map(device => (device.id === id ? {...device, name: newName} : device)));
    }

    function deleteDevice(id) {
        setDevices(prev => prev.filter(device => device.id !== id));
    }

    function addDevice(deviceData) {
        const errors = validateDeviceName(deviceData,devices);
        if (!Object.keys(errors).length>0) {
            return errors;
        }
        const newDevice = {
            id: crypto.randomUUID(),
            ...deviceData,
        }
        setDevices(prev => [...prev, newDevice]);
        setIsFormOpen(false);
    }

  return (
    <main className="page">
      <header>
        <p className="kicker">My devices lab</p>
        <h1>My devices</h1>

        <p className="muted">Control devices</p>
      </header>
        {
            !isFormOpen && (
                <div className="actions">
                    <button
                        onClick={() => setIsFormOpen(true)}>
                        Add Device
                    </button>
                </div>
            )
        }{
            isFormOpen && (
                <DeviceForm onAdd={addDevice} onCansel={() => setIsFormOpen(false)} />
        )
    }

      <p className="summary"> Number of devices: {devices.length}</p>
      <DeviceList devices={devices} deleteDevice={deleteDevice} editDevice={editDevice}/>
    </main>
  )
}

export default App
