// Code your solution in this file!
function distanceFromHqInBlocks(start) {
    const distance = 42 - start;
    return Math.abs(distance)

};

function distanceFromHqInFeet(start) {
    return distanceFromHqInBlocks(start) * 264;
};

function distanceTravelledInFeet(start, destination){
    const distance = start - destination;
    return Math.abs(distance * 264)
};

function calculatesFarePrice(start, destination) {
    let fare = 0;
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return fare;
    }
    else if (distance > 400 & distance < 2000) {
    fare = (distance - 400) * .02
    return fare;
    }

    else if (distance > 2500){
        return 'cannot travel that far'
    }

    else{
        return fare = 25;
    }
}

