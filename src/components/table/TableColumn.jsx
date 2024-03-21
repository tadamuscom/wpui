import { useState } from "react";
import ContentEditable from "react-contenteditable";

export const TableColumn = ({ data, editable, column, onBlur }) => {
  const [columnData, setColumnData] = useState(data);

  const onChange = (event) => {
    setColumnData(event.target.value);
  };

  let editable = editable;

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
          onChange={onChange}
          onBlur={onBlur}
        />
      </td>
    );
  }
};
