// import { useState } from 'react'

import './App.css'
import DeviceList from "./components/DeviceList.jsx";
import {initialDevices} from "./data/devices.js";

function App() {


  return (
    <main className="page">
      <header>
        <p className="kicker">My devices lab</p>
        <h1>My devices</h1>

        <p className="muted">Control devices</p>
      </header>

      <p className="summary"> Number o devices: {initialDevices.length}</p>
      <DeviceList devices={initialDevices}/>
    </main>
  )
}

export default App
