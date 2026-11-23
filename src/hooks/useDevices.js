import { useState } from 'react'
import {initialDevices} from "../data/devices.js";
import {deleteDevice} from "../utils/deleteDevice.js";
import {renameDevice} from "../utils/renameDevice.js";

function useDevice() {
    const [devices, setDevices] = useState(initialDevices);
    function handleDelete(id) {
        setDevices(prevDevice =>
        deleteDevice(prevDevice, id));
    }
    function handleRenameDevices(id, newName) {
        setDevices(prevDevice =>
        renameDevice(prevDevice, id, newName));
    }
    return {devices, handleDelete, handleRenameDevices};

}
export default useDevice;