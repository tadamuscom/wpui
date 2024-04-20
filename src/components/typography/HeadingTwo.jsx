/**
 * Add a H2 element
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const HeadingTwo = ({ extraClass, label }) => {
  return <h2 className={`tada-heading-2 ${extraClass}`}>{label}</h2>;
};
