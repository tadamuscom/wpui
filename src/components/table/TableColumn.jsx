import { useState } from "react";
import ContentEditable from "react-contenteditable";

export const TableColumn = ({ data, editable, column, onBlur }) => {
  const [columnData, setColumnData] = useState(data);

  const handleChange = (event) => {
    setColumnData(event.target.value);
  };

  switch (column) {
    case "ID":
    case "id":
    case "created_at":
    case "expires_at":
      editable = false;
  }

  if (!editable) {
    return <td column={column}>{columnData}</td>;
  } else {
    return (
      <td column={column}>
        <ContentEditable
          html={columnData}
          onChange={handleChange}
          onBlur={onBlur}
        />
      </td>
    );
  }
};
