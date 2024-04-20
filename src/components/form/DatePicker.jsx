/**
 * Add a datepicker input
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const DatePicker = ({extraClass, id, name, min, max, disabled}) => {
	return (
		<input
			type="date"
			className={extraClass}
			id={id}
			name={name}
			min={min}
			max={max}
			disabled={disabled}
		/>
	);
};
