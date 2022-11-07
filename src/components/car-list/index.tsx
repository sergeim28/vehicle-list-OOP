import React from "react";

import { useAppContext } from "../../hooks";

import CarItem from "../car-item";

const CarList: React.FC = () => {
  const { cars } = useAppContext();
  return (
    <div
      className="car-list"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        gridAutoRows: "minmax(100px, auto)",
      }}
    >
      {cars.map((car, index) => (
        <CarItem car={car} key={index} />
      ))}
    </div>
  );
};

export default CarList;
