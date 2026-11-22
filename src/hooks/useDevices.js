import { useState } from 'react'
import {initialDevices} from "../data/devices.js";
import {deleteDevice} from "../utils/deleteDevice.js";
function useDevice() {
    const [devices, setDevices] = useState(initialDevices);
    function handleDelete(id) {
        setDevices(prevState =>
        deleteDevice(prevState, id));
    }
    return {devices, handleDelete}
}
export default useDevice;