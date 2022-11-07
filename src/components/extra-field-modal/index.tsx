import { useState } from "react";

import { useAppContext } from "../../hooks";

type Props = {
  close: () => void;
};

const ExtraFieldModal: React.FC<Props> = ({ close }) => {
  const { addExtraField, deleteExtraField, extra } = useAppContext();
  const [fieldName, setFieldName] = useState<string>("");

  const onAddExtraField = () => {
    if (!fieldName) return;
    addExtraField(fieldName);
    setFieldName("");
  };
  const onDeleteExtraField = (name: string) => {
    deleteExtraField(name);
  };

  return (
    <div
      style={{
        position: "absolute",
        width: 500,
        height: 300,
        top: 50,
        left: 100,
        backgroundColor: "white",
        border: "1px solid grey",
      }}
    >
      {/* extra fields */}
      {Object.entries(extra || {}).map(([name, label], index) => (
        <div style={{ display: "flex", gap: 8 }} key={index}>
          <label>{label}</label>
          <input name={name} />
          <button type="button" onClick={() => onDeleteExtraField(name)}>
            Remove
          </button>
        </div>
      ))}

      <div style={{ display: "flex", gap: 8 }}>
        <label>New field name:</label>
        <input
          name={"name"}
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
        />
      </div>
      <button type="button" onClick={onAddExtraField}>
        Add
      </button>

      <button type="button" onClick={close}>
        Close
      </button>
    </div>
  );
};

export default ExtraFieldModal;
