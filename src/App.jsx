import { useState } from 'react'

import './App.css'
import DeviceList from "./components/DeviceList.jsx";
import {initialDevices} from "./data/devices.js";

function App() {
    const [devices, setDevices] = useState(initialDevices);
    const [idDevice, setIdDevice] = useState(null);
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
      />
        {editingDevice && <div className="panel">
            <h3>{editingDevice.name}</h3>
            <button onClick={cancelEditDevice}>Cancel</button>
        </div>}
    </main>
  )
}

export default App
