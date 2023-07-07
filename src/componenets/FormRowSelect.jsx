import React from "react";

function FormRowSelect({ lableText, name, value, handleChange, list }) {
  return (
    <div className="form-row">
      <label htmlFor="status" className="form-label">
        {lableText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormRowSelect;
