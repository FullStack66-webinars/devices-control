import { useState } from 'react'
import './App.css'
import DeviceList from "./components/DeviceList.jsx";
import {initialDevices} from "./data/devices.js";


function App() {
    const [devices, setDevices] = useState(initialDevices);

    function editDevice(id, newName) {
        setDevices(prev => prev.map(device => (device.id === id ? {...device, name: newName} : device)));
    }

    function deleteDevice(id) {
        setDevices(prev => prev.filter(device => device.id !== id));
    }

  return (
    <main className="page">
      <header>
        <p className="kicker">My devices lab</p>
        <h1>My devices</h1>

        <p className="muted">Control devices</p>
      </header>

      <p className="summary"> Number of devices: {devices.length}</p>
      <DeviceList devices={devices} deleteDevice={deleteDevice} editDevice={editDevice}/>
    </main>
  )
}

export default App
