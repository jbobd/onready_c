
const cars = require("./store/cars");

const getPrice = (car) => {
  let decimales = `${car.decimals ? car.decimals : "00"}`;
  let precio = String(car.precio).replace(/(.)(?=(\d{3})+$)/g, "$1.");
  precio = `$${precio},${decimales}`;
  return precio;
};

const carOutput = (car) => {
  let cilindrada = `${car.cilindrada ? "cilindrada: " + car.cilindrada : ""}`;
  let puertas = `${car.puertas ? "puertas: " + car.puertas : ""}`;
  let precio = getPrice(car);
  console.log(
    `Marca: ${car.marca} // Modelo: ${car.modelo} ${cilindrada} ${puertas} // Precio: ${precio}`
  );
};

const mainOutPut = () => {
  cars.map((car) => carOutput(car));
  console.log("===========================");
  const maxPrice = cars.reduce((ant, curr) =>
    parseInt(ant.precio) > parseInt(curr.precio) ? ant : curr
  );
  const minPrice = cars.reduce((ant, curr) =>
    parseInt(ant.precio) < parseInt(curr.precio) ? ant : curr
  );
  const conY = cars.find((car) => car.modelo.toUpperCase().includes("Y"));
  const orderedByPrice = cars.sort(
    (a, b) => parseInt(b.precio) - parseInt(a.precio)
  );
  console.log(`Vehículo más caro: ${maxPrice.marca} ${maxPrice.modelo}`);
  console.log(`Vehículo más barato: ${minPrice.marca} ${minPrice.modelo}`);
  console.log(
    `Vehículo que contiene en el modelo la letra ‘Y’: ${conY.marca} ${
      conY.modelo
    } ${getPrice(conY)}`
  );
  console.log("===========================");
  console.log("Vehículos ordenados por precio de mayor a menor:");
  orderedByPrice.map((car) => console.log(`${car.marca} ${car.modelo}`));
};

mainOutPut();



/*
Dejo esta parte comentada en el caso que se quiera levantar un server,
pero el ejercicio solo pedía imprimir a console.log.
Opté también por no utilizar express ya que para este ejercicio era innecesario.

var http = require('http');
const PORT = require("./config/config");

//creamos el server
 http.createServer(function (req, res) {
  res.write('Test de prueba de Onready'); 
  res.end(); 
}).listen(PORT, function(){
 console.log(`server start at port ${PORT}`); 
}); 

//server.listen(PORT, console.log(`Server started on ${PORT}`));

//process.exit()

*/
