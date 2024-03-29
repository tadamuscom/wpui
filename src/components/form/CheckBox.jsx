import { useState } from "react";

/**
 * Add a checkbox input
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const CheckBox = ({ onChange, wrapExtraClass, label, name, id }) => {
  const [value, setValue] = useState(value);

  const handleChange = () => {
    setValue((state) => !state);

    if (onChange) {
      onChange();
    }
  };

  return (
    <div className={wrapExtraClass}>
      <label className="checkbox-container tada-flex-row">
        <span className="checkbox-label">{label}</span>
        <input
          type="checkbox"
          checked={value}
          name={name}
          id={id}
          onChange={handleChange}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};
