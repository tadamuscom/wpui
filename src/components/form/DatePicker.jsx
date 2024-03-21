/**
 * Add a datepicker input
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const DatePicker = ({
  wrapExtraClass,
  extraClass,
  id,
  name,
  min,
  max,
}) => {
  return (
    <div className={wrapExtraClass}>
      <input
        type="date"
        className={extraClass}
        id={id}
        name={name}
        min={min}
        max={max}
      />
    </div>
  );
};
