const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function batteries(total, batch) {
    return total + batch;
}

let totalBatteries = batteryBatches.reduce(batteries)

