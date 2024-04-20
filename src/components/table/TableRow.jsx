import { TableColumn } from "./TableColumn";

export const TableRow = ({ columns, editable, onBlur, onDelete }) => {
  return (
    <tr>
      {columns.map((column, index) => (
        <TableColumn
          data={value}
          key={index}
          column={column}
          editable={editable}
          onBlur={onBlur}
        />
      ))}
      <td>
        <button className="tada-action-icon tada-delete-btn" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};
