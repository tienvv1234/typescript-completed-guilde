class Vehicle {
    driver(): void {
        console.log('chugga chugga');
    }

    honk(): void {
        console.log('beep')
    }
}

const vehicle = new Vehicle();
vehicle.driver();
vehicle.honk();