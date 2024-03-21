/**
 * Add a label
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const Label = ({ wrapExtraClass, htmlFor, extraClass, label }) => {
  return (
    <div className={wrapExtraClass}>
      <label htmlFor={htmlFor} className={extraClass}>
        {label}
      </label>
    </div>
  );
};
