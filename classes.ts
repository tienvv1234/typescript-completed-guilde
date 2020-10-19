class Vehicle {
  driver(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
    driver(): void {
        console.log('vroom')
    }
}

const vehicle = new Vehicle();
vehicle.driver();
vehicle.honk();

const car = new Car();
car.driver();
car.honk();
