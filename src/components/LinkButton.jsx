/**
 * Add an A element stylized like a button
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const LinkButton = ({ click, extraClass, label }) => {
  return (
    <a onClick={click} className={`tada-button ${extraClass}`}>
      {label}
    </a>
  );
};
