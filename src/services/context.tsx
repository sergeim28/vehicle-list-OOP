import { createContext, PropsWithChildren, useState } from "react";

import { Car } from "../data/car/models";

import { carService, NewCarInput } from "./car-service";
import { extraService } from "./extra-service";

import { formFieldKeys } from "../components/car-form";

type AppContextType = {
  cars: Car[];
  extra: { [key: string]: string | number } | undefined;

  addCar: (formData: { name: string; value: string }[]) => void;
  deleteCar: (id: string) => void;
  addExtraField: (_: string) => void;
  deleteExtraField: (_: string) => void;
};

const defaultValue = {
  cars: [],
  extra: undefined,
  addCar: (_: { name: string; value: string }[]) => {},
  deleteCar: (_: string) => {},
  addExtraField: (_: string) => {},
  deleteExtraField: (_: string) => {},
};

export const AppContext = createContext<AppContextType>(defaultValue);

export const CarContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [extra, setExtra] = useState();

  const addCar = (keyValues: { name: string; value: string }[]) => {
    const formData: NewCarInput = keyValues.reduce((prev, { name, value }) => {
      if (formFieldKeys.includes(name)) return { ...prev, [name]: value };
      return { ...prev, extra: { ...(prev?.extra || {}), [name]: value } };
    }, {} as NewCarInput);

    setCars(carService.addCar(formData as NewCarInput));
  };
  const deleteCar = (id: string) => {
    setCars(carService.deleteCar(id));
  };

  const addExtraField = (fieldName: string) => {
    setExtra(extraService.addField(fieldName));
  };
  const deleteExtraField = (fieldName: string) => {
    setExtra(extraService.deleteField(fieldName));
  };

  return (
    <AppContext.Provider
      value={{
        cars,
        extra,
        addCar,
        deleteCar,
        addExtraField,
        deleteExtraField,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
