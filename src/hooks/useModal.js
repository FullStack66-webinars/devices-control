import { useState } from 'react'

function useModal() {
    const [selectedDevice, setSelectedDevice] = useState(null);
    function openModal(device) {
        setSelectedDevice(device);
    }
    function closeModal() {
        setSelectedDevice(null);
    }
    return {selectedDevice, openModal, closeModal};
}

export default useModal;