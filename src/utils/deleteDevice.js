

export function deleteDevice(devices, id) {
    const dev = devices.filter(device => device.id !== id);
    return dev;
}