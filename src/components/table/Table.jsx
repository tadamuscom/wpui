import { TableHeader, TableRow } from '../../index';
import { doAction } from '@wordpress/hooks';

/**
 * Add a Table
 *
 * @since 1.0.2
 *
 * @param editable
 * @param onBlur
 * @param className
 * @param onDelete
 * @param headers
 * @param rows
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const Table = ({
	editable,
	onBlur,
	className,
	headers,
	rows,
	...props
}) => {
	const defaultClasses = 'tada-table mt-3';

	return (
		<table
			className={className ? defaultClasses + ' ' + className : defaultClasses}>
			{doAction('wpui-table-before-head')}
			<thead>
				<tr>
					{headers.map((header, index) => (
						<TableHeader content={header} key={index} />
					))}
				</tr>
			</thead>
			{doAction('wpui-table-after-head')}
			<tbody>
				{doAction('wpui-table-before-body')}
				{rows.map((row, index) => (
					<TableRow
						columns={row}
						key={index}
						editable={editable ? editable : false}
						onBlur={onBlur ? onBlur : false}
						headers={headers}
						{...props}
					/>
				))}
				{doAction('wpui-table-after-body')}
			</tbody>
		</table>
	);
};
