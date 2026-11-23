import './App.css'
import DeviceList from "./components/DeviceList.jsx";
import useDevices from "./hooks/useDevices.js";
import useModal from "./hooks/useModal.js";
import EditDeviceModal from "./components/EditDeviceModal.jsx";

function App() {
    const { devices, handleDelete, handleRenameDevices } = useDevices();
    const { selectedDevice, openModal, closeModal } = useModal();

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
                onEdit={openModal}
            />
            {selectedDevice && <EditDeviceModal
            device={selectedDevice}
            onSave={handleRenameDevices}
            onClose={closeModal}/>}
        </main>
    )
}

export default App
