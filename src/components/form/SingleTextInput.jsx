import { useState } from "react";

/**
 * Add a text input
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const SingleTextInput = ({
  value,
  onChange,
  extraClass,
  id,
  name,
  disabled,
}) => {
  const [localValue, setValue] = useState(value);

  const handleChange = (e) => {
    setValue(e.target.value);

    if (onChange) {
      onChange();
    }
  };

  return (
    <input
      type="text"
      autoComplete="off"
      className={extraClass}
      id={id}
      name={name}
      value={localValue}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};
