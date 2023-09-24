function distanceFromHqInBlocks(43) {
  return Math.abs(43 - 42);
}
  //returns the number of blocks given a value
function distanceFromHqInFeet(43) {
  return distanceFromHqInBlocks(43) * 264;
}
  //returns the distance in feet given a value
function distanceTravelledInFeet(43, 48) {
  return Math.abs(43 - 48) * 264;
}
  //returns the distance in feet given a beginning and destination block
function calculatesFarePrice(43, 44) {
  const distance = distanceTravelledInFeet(43, 44);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}
  //returns the fare price given a distance


