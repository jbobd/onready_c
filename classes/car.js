const vehicle = require("./vehicle");

class car extends vehicle {
  constructor(brand, model, price, decimals, doors) {
    super(brand, model, price, decimals);
    this._doors = doors;
  }

  set doors(updatedDoors) {
    this._doors = updatedDoors;
  }

  showInfo() {
    return super.showInfo() + ` // puertas: ${this._doors} // ${this.price}`;
  }
}

module.exports = car;
