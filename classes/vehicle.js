class vehicle {
  constructor(brand, model, price, decimals) {
    this._brand = brand;
    this._model = model;
    this._price = price;
    decimals ? (this._decimals = decimals) : "00";
  }

  set brand(updatedBrand) {
    this._brand = updatedBrand;
  }
  set model(updatedModel) {
    this._model = updatedModel;
  }
  set price(updatedPrice) {
    this._price = updatedPrice;
  }
  set decimals(updatedDecimals) {
    this._decimals = updatedDecimals;
  }

  formatPrice(price) {
    let formattedPrice = price.replace(/(.)(?=(\d{3})+$)/g, "$1.");
    return formattedPrice;
  }

  get price() {
    return `precio: $${this.formatPrice(this._price)},${this._decimals}`;
  }

  showInfo() {
    let info = `Marca: ${this._brand} // Modelo: ${this._model}`;
    return info;
  }
}

module.exports = vehicle;
