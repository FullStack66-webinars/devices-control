import './App.css'
import DeviceList from "./components/DeviceList.jsx";
import useDevices from "./hooks/useDevices.js";

function App() {
    const { devices, handleDelete } = useDevices();

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
                onDelete={handleDelete}
            />
        </main>
    )
}

export default App
