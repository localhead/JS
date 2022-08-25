"use strict";

class TheGasCarCl {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }

  accelerate(amount) {
    this.speed += amount;

    return this;
  }

  brake(amount) {
    this.speed -= amount;

    return this;
  }

  Info() {
    console.log(`Car is ${this.model} / Speed is ${this.speed} km/h`);
    return this;
  }
}

class EVCl extends TheGasCarCl {
  // this prop will not accessed from parent class
  #charge;

  constructor(model, speed, charge) {
    super(model, speed);
    this.#charge = charge;
  }

  chargeB(amount) {
    this.#charge += amount;
    return this;
  }

  // We can change #charge only in this child class
  logCharge() {
    console.log("Charge is " + this.#charge);
    return this;
  }
}

const tesla3 = new EVCl("Tesla Model 3", 150, 75);

tesla3
  .accelerate(10)
  .chargeB(-15)
  .Info()
  .logCharge()
  .accelerate(20)
  .chargeB(-25)
  .Info()
  .logCharge()
  .brake(20)
  .chargeB(8)
  .Info()
  .logCharge();
