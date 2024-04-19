/**
 * Add a label
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const Label = ({ htmlFor, extraClass, label }) => {
  return (
    <label htmlFor={htmlFor} className={extraClass}>
      {label}
    </label>
  );
};
