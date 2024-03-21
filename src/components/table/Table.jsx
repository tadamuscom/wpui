import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

/**
 * Add a Table
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const Table = ({ editable, onBlur, extraClass, onDelete }) => {
  if (!editable) {
    editable = false;
  }

  if (!onBlur) {
    onBlur = false;
  }

  return (
    <table className={`tada-table ${extraClass}`}>
      <thead>
        <tr>
          <TableHeader content="ID" key={"id"} />
          {headers.map((header, index) => {
            <TableHeader content={header} key={index} />;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          <TableRow
            columns={row}
            key={index}
            editable={editable}
            onBlur={onBlur}
            onDelete={onDelete}
          />;
        })}
      </tbody>
    </table>
  );
};
