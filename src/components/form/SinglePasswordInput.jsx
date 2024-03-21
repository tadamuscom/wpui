import { useState } from "react";

/**
 * Add a password input
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const SinglePasswordInput = ({
  value,
  onChange,
  wrapExtraClass,
  extraClass,
  id,
  name,
}) => {
  const [value, setValue] = useState(value);

  const onChange = (e) => {
    setValue(e.target.value);

    if (onChange) {
      onChange();
    }
  };

  return (
    <div className={wrapExtraClass}>
      <input
        type="password"
        autoComplete="off"
        className={extraClass}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
