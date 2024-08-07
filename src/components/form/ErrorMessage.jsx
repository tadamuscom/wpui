/**
 * Display error message
 *
 * @param className
 * @param error
 * @returns {JSX.Element}
 * @constructor
 */
export const ErrorMessage = ({ className, children, inline = false }) => {
	const displayClass = inline ? 'pl-4 inline-block' : 'ml-1 mt-1 block';
	const defaultClasses = `font-poppins text-sm text-red-500 ${displayClass}`;

	return (
		<p
			className={className ? defaultClasses + ' ' + className : defaultClasses}>
			{children}
		</p>
	);
};
