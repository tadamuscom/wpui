/**
 * Add a submit input styled like a button
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const Button = ({ extraClass, label, disabled }) => {
  return (
    <input
      type="submit"
      className={`tada-button ${extraClass}`}
      value={label}
      disabled={disabled}
    />
  );
};
