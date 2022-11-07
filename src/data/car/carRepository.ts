import { RepositoryBase } from "../base";

import { Car } from "./models";

export class CarRepository extends RepositoryBase<Car[]> {
  add(car?: Car) {
    if (car === undefined) return;
    const currentCars = this.storage || [];
    this.storage = [...currentCars, car];
    this.set();
  }

  delete(id?: string) {
    if (id === undefined) return;
    const currentCars = this.storage || [];
    this.storage = currentCars.filter((car) => car.model.id !== id);
    this.set();
  }
}
