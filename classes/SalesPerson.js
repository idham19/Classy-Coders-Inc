const { Employees } = require("./Employees");

class SalesPerson extends Employees {
  #totalSales;
  constructor(name, position, salary, client = []) {
    super(name, position, salary);
    this.client = client;
    this.#totalSales = 0;
  }
  getSalesNumber() {
    return this.#totalSales;
  }
  makeSale(amount) {
    this.#totalSales += amount;
  }
  findClient(name) {
    for (let i = 0; i < this.client.length; i++) {
      if (this.client[i].name === name) {
        return this.client[i];
      }
    }
    return null; 
  }
}

module.exports = {
  SalesPerson,
};
