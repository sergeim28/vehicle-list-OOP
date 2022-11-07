import React, { useState } from "react";
import { useAppContext } from "../../hooks";

import ExtraFieldModal from "../extra-field-modal";

const formFields: {
  [key: string]: {
    label: string;
    type: "text" | "select";
    values?: number[];
  };
} = {
  engine: {
    label: "Engine",
    type: "text",
  },
  brand: {
    label: "Brand",
    type: "text",
  },
  airSuspension: {
    label: "Air suspension",
    type: "select",
    values: [1, 0],
  },

  //   exterior
  bodyColor: {
    label: "Body color",
    type: "text",
  },
  paintType: {
    label: "Type of paint",
    type: "text",
  },
  wheelSize: {
    label: "Wheel size",
    type: "text",
  },

  // interior
  seats: {
    label: "Seats",
    type: "text",
  },
};
export const formFieldKeys = Object.keys(formFields);

const CarForm: React.FC = () => {
  const { addCar, extra } = useAppContext();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const onSubmit = (e: any) => {
    e.preventDefault();

    addCar([...e.target]);
  };

  return (
    <form onSubmit={onSubmit}>
      {/* default fields */}
      {Object.entries(formFields).map(
        ([name, { label, type, values }], index) => (
          <div style={{ display: "flex", gap: 8 }} key={index}>
            <label>{label}</label>
            {type === "text" ? (
              <input name={name} />
            ) : (
              <select name={name}>
                {values?.map((value, index) => (
                  <option key={index} value={value}>
                    {value ? "Yes" : "No"}
                  </option>
                ))}
              </select>
            )}
          </div>
        )
      )}

      {/* extra fields */}
      {Object.entries(extra || {}).map(([name, label], index) => (
        <div style={{ display: "flex", gap: 8 }} key={index}>
          <label>{label}</label>
          <input name={name} />
        </div>
      ))}

      {isModalVisible && (
        <ExtraFieldModal close={() => setModalVisible(false)} />
      )}
      <input type="submit" />
      <button type="button" onClick={() => setModalVisible(true)}>
        Add extra field
      </button>
    </form>
  );
};

export default CarForm;
