/**
 * Add a div that will be the wrapper for input elements, their labels and helper texts.
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const FormGroup = ({extraClass, children}) => {
	return <div className={`tada-form-group ${extraClass}`}>{children}</div>;
};
