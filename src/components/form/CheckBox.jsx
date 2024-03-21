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
export const CheckBox = ({
  value,
  onChange,
  wrapExtraClass,
  label,
  name,
  id,
}) => {
  const [value, setValue] = useState(value);

  const onChange = (e) => {
    setValue(!value);

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
          onChange={onChange}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};
