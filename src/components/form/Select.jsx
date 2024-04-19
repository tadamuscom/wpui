/**
 * Add a select element
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const Select = ({ extraClass, id, name, options, disabled }) => {
  return (
    <select
      className={`tada-select ${extraClass}`}
      id={id}
      name={name}
      disabled={disabled}
    >
      {options}
    </select>
  );
};
