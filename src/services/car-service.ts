import { dataLayer } from "../data";
import { Car, CarExterior, CarInterior, CarSummary } from "../data/car/models";

import { generateUUID } from "../helpers";

export type NewCarInput = {
  // summary
  engine: string;
  brand: string;
  airSuspension: boolean;

  //   exterior
  bodyColor: string;
  paintType: string;
  wheelSize: string;

  // interior
  seats: string;

  //   extra
  extra: { [key: string]: string | number } | undefined;
};

export const carService = {
  addCar: (newCar: NewCarInput) => {
    const {
      engine,
      brand,
      airSuspension,
      bodyColor,
      paintType,
      wheelSize,
      seats,
      extra,
    } = newCar;

    const summary = new CarSummary(engine, brand, airSuspension);
    const exterior = new CarExterior(bodyColor, paintType, wheelSize);
    const interior = new CarInterior(seats);
    const car = new Car(generateUUID(), summary, exterior, interior);
    if (extra) car.extra = extra;

    dataLayer.getCarsRepo().add(car);

    const newState = dataLayer.getCarsStorage();

    return newState;
  },

  deleteCar: (id: string) => {
    dataLayer.getCarsRepo().delete(id);

    const newState = dataLayer.getCarsStorage();

    return newState;
  },
};
