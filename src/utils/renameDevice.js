export function renameDevice(devices, id, newName) {
    return devices.map(device => {
            if (device.id === id) {
                return {
                    ...device,
                    name: newName
                }
            }
            return device;
        }
    )
}