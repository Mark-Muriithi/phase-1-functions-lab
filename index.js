const blockLength = 264; // 1 block = 264 feet

function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42); // Assuming headquarters is at block 42
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * blockLength;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * blockLength;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;

    if (distance <= 400) {
        fare = 0;
    } else if (distance > 400 && distance <= 2000) {
        fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        fare = 25;
    } else {
        fare = 'cannot travel that far';
    }

    return fare;
}
