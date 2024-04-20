import { useState } from "react";

/**
 * Add a password input
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const SinglePasswordInput = ({
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
			type="password"
			autoComplete="off"
			className={extraClass}
			id={id}
			name={name}
			value={localValue}
			onChange={handleChange}
			disabled={disabled}
		/>
	)
};
