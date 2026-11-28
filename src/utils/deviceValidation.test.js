import {validateDeviceName} from "./deviceValidation.js";
import {initialDevices} from "../data/devices.js";

let passed = 0;
let failed = 0;

function checkResult(testName, actual, expected) {
	if (actual === expected) {
		passed++;
		console.log(testName + ": PASSED");
	} else {
		failed++;
		console.log(testName + ": FAILED");
		console.log("Expected:", expected);
		console.log("Actual:", actual);
	}
}

const lengthError = "Device name must be between 2 and 50 characters.";
const duplicateError = "A device with this name already exists.";

checkResult("Valid name", validateDeviceName("MacBook", initialDevices), "");
checkResult("Empty name", validateDeviceName("", initialDevices), lengthError);
checkResult("Spaces", validateDeviceName("   ", initialDevices), lengthError);
checkResult("Short name", validateDeviceName("A", initialDevices), lengthError);

checkResult("Duplicate", validateDeviceName("Phone", initialDevices), duplicateError);
checkResult("Normalized duplicate", validateDeviceName("  PHONE  ", initialDevices), duplicateError);

checkResult("Min length", validateDeviceName("AA", initialDevices), "");
checkResult("Max length", validateDeviceName("A".repeat(50), initialDevices), "");
checkResult("Too long", validateDeviceName("A".repeat(51), initialDevices), lengthError);

checkResult("Keep own name", validateDeviceName("Phone", initialDevices, "101"), "");
checkResult("Rename to duplicate", validateDeviceName("iPhone", initialDevices, "101"), duplicateError);

console.log("\n--- Test Summary ---");
console.log("Total:", passed + failed);
console.log("Passed:", passed);
console.log("Failed:", failed);