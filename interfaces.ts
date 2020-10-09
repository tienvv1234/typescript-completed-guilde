interface Vehicle {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `name: ${this.name}`;
    }
}

const drink1 = {
    color: 'civic',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.name} grams of sugar`;
    }
}

const printVehicle = (vehicle: { name: string, year: number, broken: boolean }) => {
    console.log(`name: ${vehicle.name}, year: ${vehicle.year}, broken: ${vehicle.broken }`)
}

const printSummary = (item: Vehicle) => {
    console.log(item.summary());
}

printVehicle(oldCivic);

printSummary(oldCivic);
printSummary(drink1);