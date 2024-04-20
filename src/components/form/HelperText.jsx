/**
 * Add a helper text under inputs
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const HelperText = ({extraClass, content}) => {
	return <p className={`tada-helper-text ${extraClass}`}>{content}</p>;
};
