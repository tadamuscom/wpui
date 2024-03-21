/**
 * Add a select element
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const Select = ({ wrapExtraClass, extraClass, id, name, options }) => {
  return (
    <div className={wrapExtraClass}>
      <select className={`tada-select ${extraClass}`} id={id} name={name}>
        {options}
      </select>
    </div>
  );
};
