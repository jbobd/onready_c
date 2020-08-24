const vehicles = require("./store/vehicles");
const {
  separator,
  maxPrice,
  minPrice,
  withY,
  orderedByPrice,
} = require("./utils");

const main = () => {
  vehicles.map((vehicle) => console.log(vehicle.showInfo()));
  separator();
  console.log(`Vehículo más caro: ${maxPrice._brand} ${maxPrice._model}`);
  console.log(`Vehículo más barato: ${minPrice._brand} ${minPrice._model}`);
  console.log(
    `Vehículo que contiene en el modelo la letra ‘Y’: ${withY._brand} ${withY._model} ${withY.price}`
  );
  separator();
  console.log("Vehículos ordenados por precio de mayor a menor:");
  orderedByPrice();
};

main();
