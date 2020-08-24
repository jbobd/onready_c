const vehicle = require("./vehicle");

class motorbike extends vehicle {
  constructor(brand, model, price, decimals, displacement) {
    super(brand, model, price, decimals);
    this._displacement = displacement;
  }

  set doors(updatedDisplacement) {
    this._displacement = updatedDisplacement;
  }

  showInfo() {
    return super.showInfo() + ` // Cilindrada: ${this._displacement} // ${this.price}`;
  }
}

module.exports = motorbike;
