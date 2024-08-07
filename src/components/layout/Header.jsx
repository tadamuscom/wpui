import { doAction } from '@wordpress/hooks';

/**
 * Add the main Header for the pages
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const Header = ({ logoURL, logoLink, pageTitle }) => {
	if (!logoURL) logoURL = 'https://tadamus.com';

	return (
		<div className="flex flex-row items-center mt-2">
			{doAction('wpui-header-before-logo', logoURL, logoLink, pageTitle)}
			<div className="border-4 border-black border-solid border-t-0 border-b-0 border-l-0 pr-2">
				<a href={logoURL} target="_blank" rel="noreferrer">
					<img src={logoLink} alt="logo" width="200px" />
				</a>
			</div>
			{doAction('wpui-header-after-logo', logoURL, logoLink, pageTitle)}
			<div className="pl-2">
				<h1 className="font-kanit font-bold font-xl uppercase">{pageTitle}</h1>
			</div>
		</div>
	);
};
