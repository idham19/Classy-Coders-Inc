class Employees {
  #salary;
  #isHired;
  static #allEmployees = [];
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
    Employees.#allEmployees.push(this);
  }
  // Getter method for salary
  getSalary() {
    return this.#salary;
  }

  // Setter method to update salary
  setSalary(newSalary) {
    this.#salary = newSalary;
  }
  // Getter method for hire status
  getStatus() {
    return this.#isHired;
  }

  // Method to terminate employee (change hire status)
  setStatus(command) {
    if (command == "fire") {
      this.#isHired = false;
    } else if (command == "hire") {
      this.#isHired = true;
    }
  }

  static getEmployees(){
    return Employees.#allEmployees;
  }
  static getTotalPayroll() {
    let total = 0;
    for (const employee of Employees.#allEmployees) {
      total += employee.getSalary();
    }
    return total;
  }
}

module.exports = {
  Employees,
};
