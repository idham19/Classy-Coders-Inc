const { Employees } = require("./Employees");
class Manager extends Employees {
  #employeesManaged = [];
  constructor(name, position, salary, department) {
    super(name, position, salary);
    this.department = department;
  }
  getEmployeesManaged() {
    return this.#employeesManaged;
  }
  setEmployeesManaged(employee) {
    this.#employeesManaged.push(employee);
  }
  promote(newTitle, salaryIncrease) {
    let currentSalary = this.getSalary();
    this.position = newTitle;
    currentSalary += salaryIncrease;
  }
}

module.exports = {
  Manager,
};
