import {PLATFORMS} from "../constants/platforms.js";

export function validateDeviceName(name, devices, excludedId = null) {
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const nameLength = [...trimmedName].length;

    if (nameLength < 2 || nameLength > 50) {
        return "Device name must be between 2 and 50 characters.";
    }

    const normalizedName = trimmedName.toLowerCase();
    const hasDuplicate = devices.some(({id, name: deviceName}) => (
        (excludedId === null || id !== excludedId) &&
        deviceName.trim().toLowerCase() === normalizedName
    ));

    return hasDuplicate ? "A device with this name already exists." : "";
}

export function validateDevice(formData, devices, excludedId = null) {
    const {name, platform, isActive} = formData ?? {};
    const errors = {};
    const nameError = validateDeviceName(name, devices, excludedId);

    if (nameError) {
        errors.name = nameError;
    }

    if (!PLATFORMS.includes(platform)) {
        errors.platform = "Select a valid operating system.";
    }

    if (typeof isActive !== "boolean") {
        errors.isActive = "Active status must be true or false.";
    }

    return errors;
}
