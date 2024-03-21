/**
 * Add a H2 element
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const HeadingTwo = ({ wrapExtraClass, extraClass, label }) => {
  return (
    <div className={`tada-flex ${wrapExtraClass}`}>
      <h2 className={`tada-heading-2 ${extraClass}`}>{label}</h2>
    </div>
  );
};
