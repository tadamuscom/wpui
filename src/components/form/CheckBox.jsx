import {useState} from "react";

/**
 * Add a checkbox input
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const CheckBox = ({
													 onChange,
													 wrapExtraClass,
													 label,
													 name,
													 id,
													 disabled,
												 }) => {
	const [value, setValue] = useState(value);

	const handleChange = () => {
		setValue((state) => !state);

		if (onChange) {
			onChange();
		}
	};

	return (
		<label className={`checkbox-container tada-flex-row ${wrapExtraClass}`}>
			<span className="checkbox-label">{label}</span>
			<input
				type="checkbox"
				checked={value}
				name={name}
				id={id}
				onChange={handleChange}
				disabled={disabled}
			/>
			<span className="checkmark"></span>
		</label>
	);
};
