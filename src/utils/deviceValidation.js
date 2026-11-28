import { PLATFORMS } from "../constants/platforms.js";

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 50;

export function validateDeviceName(name, devices, excludedId = null) {
    const trimmedName = typeof name === "string" ? name.trim() : "";

    if (trimmedName.length === 0) {
        return "Device name is required.";
    }

    if (trimmedName.length < MIN_NAME_LENGTH) {
        return `Device name must be at least ${MIN_NAME_LENGTH} characters long.`;
    }

    if (trimmedName.length > MAX_NAME_LENGTH) {
        return `Device name must be at most ${MAX_NAME_LENGTH} characters long.`;
    }

    const normalizedName = trimmedName.toLowerCase();
    const deviceList = Array.isArray(devices) ? devices : [];

    const isDuplicate = deviceList.some((device) => {
        if (!device || (excludedId != null && device.id === excludedId)) {
            return false;
        }

        const existingName =
            typeof device.name === "string" ? device.name.trim().toLowerCase() : "";

        return existingName === normalizedName;
    });

    if (isDuplicate) {
        return "A device with this name already exists.";
    }

    return "";
}

export function validateDevice(formData, devices) {
    const { name, platform, isActive, id } = formData ?? {};
    const errors = {};

    const nameError = validateDeviceName(name, devices, id ?? null);
    if (nameError) {
        errors.name = nameError;
    }

    if (!PLATFORMS.includes(platform)) {
        errors.platform = "Please select a valid operating system.";
    }

    if (typeof isActive !== "boolean") {
        errors.isActive = "Active status must be a boolean.";
    }

    return errors;
}
