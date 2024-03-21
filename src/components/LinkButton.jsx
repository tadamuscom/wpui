/**
 * Add an A element stylized like a button
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const LinkButton = ({ wrapExtraClass, click, extraClass, label }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "20px",
      }}
      className={wrapExtraClass}
    >
      <a onClick={click} className={`tada-button ${extraClass}`}>
        {label}
      </a>
    </div>
  );
};
