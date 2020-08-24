const vehicles = require("./store/vehicles");

const separator = () => console.log("===========================");

const maxPrice = vehicles.reduce((ant, curr) =>
  parseInt(ant._price) > parseInt(curr._price) ? ant : curr
);

const minPrice = vehicles.reduce((ant, curr) =>
  parseInt(ant._price) < parseInt(curr._price) ? ant : curr
);

const withY = vehicles.find((vehicle) =>
  vehicle._brand.toUpperCase().includes("Y")
);

const orderedByPrice = () => {
  let ordered = vehicles.sort(
    (a, b) => parseInt(b._price) - parseInt(a._price)
  );
  return ordered.map((vehicle) => console.log(`${vehicle._brand} ${vehicle._model}`));
};

module.exports = {
  separator,
  maxPrice,
  minPrice,
  withY,
  orderedByPrice,
};
