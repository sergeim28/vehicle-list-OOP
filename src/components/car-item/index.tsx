import React from "react";

import { Car } from "../../data/car/models";

import { useAppContext } from "../../hooks";

type Props = {
  car: Car;
};

const CarItem: React.FC<Props> = ({ car }) => {
  const { summary, exterior, interior, extra, id } = car.model;

  const { deleteCar } = useAppContext();

  return (
    <div
      className="car-item"
      style={{
        border: "1px solid grey",
        padding: 8,
        textAlign: "left",
        position: "relative",
      }}
    >
      <b></b>
      <div style={{}}>
        <div>Engine - {summary.engine}</div>
        <div>Brand - {summary.brand}</div>
        <div>
          Air Suspension - {summary.airSuspension === "1" ? "Yes" : "No"}
        </div>
      </div>

      <b>Exterior:</b>
      <div style={{}}>
        <div>Body color - {exterior.bodyColor}</div>
        <div>Type of paint - {exterior.paintType}</div>
        <div>Wheel size - {exterior.wheelSize}</div>
      </div>

      <b>Interior:</b>
      <div style={{}}>
        <div>Seats - {interior.seats}</div>
      </div>

      <b>Extra:</b>
      <div style={{}}>
        {Object.keys(extra || {}).map((key, index) => (
          <div key={index}>
            {key} - {extra[key]}
          </div>
        ))}
      </div>
      <button
        style={{ position: "absolute", top: 10, right: 10 }}
        onClick={() => deleteCar(id)}
      >
        delete
      </button>
    </div>
  );
};

export default CarItem;
