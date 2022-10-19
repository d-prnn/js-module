// classes

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    console.log(
      `Зарплата сотрудника ${this.name} ${this.surname} равна ${
        this.rate * this.days
      }`
    );
  }
}

const worker0 = new Worker("Иван", "Иванов", 100, 31);
const worker1 = new Worker("Маша", "Иванова", 1200, 22);
const worker2 = new Worker("Света", "Сидорова", 1400, 22);
