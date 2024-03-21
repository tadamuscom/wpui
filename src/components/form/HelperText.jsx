/**
 * Add a helper text under inputs
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const HelperText = ({ wrapExtraClass, extraClass, content }) => {
  return (
    <div className={wrapExtraClass}>
      <p className={`tada-helper-text ${extraClass}`}>{content}</p>
    </div>
  );
};
