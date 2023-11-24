class UberIndiaPricingCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distanceInKm, timeInMinutes) {
      const fare = this.baseFare + this.costPerKilometer * distanceInKm + this.costPerMinute * timeInMinutes;
      return fare;
    }
  }
  
  // Example usage:
  const uberGoCalculator = new UberIndiaPricingCalculator(55, 12, 2);
  
  const distanceInKm = 10;
  const timeInMinutes = 20;
  
  const price = uberGoCalculator.calculatePrice(distanceInKm, timeInMinutes);
  
  console.log(`The estimated Uber Go price for a ${distanceInKm}-km, ${timeInMinutes}-minute ride is ₹${price.toFixed(2)}.`);
  