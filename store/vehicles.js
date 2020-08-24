const car = require("../classes/car");
const motorbike = require("../classes/motorbike");

const vehicles = [];

vehicles.push(new car("Peugeot", "206", "200000", "00", 4));
vehicles.push(new motorbike("Honda", "Titan", "60000", "00", "125c"));
vehicles.push(new car("Peugeot", "208", "250000", "00", 5));
vehicles.push(new motorbike("Yamaha", "YBR", "80500", "50", "160"));

module.exports = vehicles;
