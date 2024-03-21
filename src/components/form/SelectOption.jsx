/**
 * Add an option element for dropdowns
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const SelectOption = ({ id, label }) => {
  return <option value={id}>{label}</option>;
};
