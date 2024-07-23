function calculateAverage(oxygenReadings) {
    // Calculate the average oxygen level
    const sum = oxygenReadings.reduce((total, reading) => total + reading, 0);
    const average = sum / oxygenReadings.length;
  
    // Check if the average level is within the safe range
    const Safe = average >= 19.5 && average <= 23.5;
  
    // Return if level is safe or not
    return `The average oxygen level is ${average.toFixed(2)}%. Oxygen level is ${Safe ? 'safe' : 'not safe'}.`;
  }
  
  // Example:
  let oxygenReadings = [20.1, 22.3, 21.0, 19.8, 23.0, 21.5];
  console.log(calculateAverage(oxygenReadings));