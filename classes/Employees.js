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
    if (this.#salary < 0) {
      throw new Error("Salary cannot be negative");
    }
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

  static getEmployees() {
    return Employees.#allEmployees;
  }
  static getTotalPayroll() {
    let total = 0;
    for (const employee of Employees.#allEmployees) {
      total += employee.getSalary();
    }
    return total;
  }

  promote(newTitle, salaryIncrease) {
    this.position = newTitle;
    this.#salary += salaryIncrease;
  }

  BonusAndPromotion() {
    let bonus = 0;
    let promotionEligible = false;

    if (score > 80) {
      bonus = this.#salary * 0.1; // 10% bonus for high-performing employees
      promotionEligible = true; // Eligible for promotion if score > 80
    } else if (score > 60) {
      bonus = this.#salary * 0.05; // 5% bonus for decent performance
    }

    console.log(`${this.name}'s performance score: ${score}`);
    console.log(`${this.name}'s bonus: $${bonus}`);

    if (promotionEligible) {
      console.log(`${this.name} is eligible for promotion.`);
    } else {
      console.log(`${this.name} is not eligible for promotion.`);
    }

    return { bonus, promotionEligible };
  }
}

module.exports = {
  Employees,
};
