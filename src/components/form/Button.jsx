/**
 * Add a submit input styled like a button
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const Button = ({ wrapExtraClass, extraClass, label }) => {
  return (
    <div className={wrapExtraClass}>
      <input
        type="submit"
        className={`tada-button ${extraClass}`}
        value={label}
      />
    </div>
  );
};
