import sanitizeHtml from "sanitize-html";

/**
 * Reset a table
 *
 * @since 1.0.0
 *
 * @param columnElement
 */
export const resetTable = (columnElement) => {
  const errorElement = document.getElementById("table-error");

  if (columnElement.style.borderColor === "red") {
    columnElement.style.borderColor = "#000";
  }

  if (errorElement) {
    errorElement.remove();
  }
};

/**
 * Trigger an error in a column table
 *
 * @since 1.0.2
 *
 * @param columnElement
 * @param table
 * @param message
 */
export const triggerColumnError = (columnElement, table, message) => {
  columnElement.style.borderColor = "red";

  const tableParent = table.parentNode;
  const errorParagraph = document.createElement("p");
  errorParagraph.id = "table-error";
  errorParagraph.innerText = message;
  errorParagraph.style.color = "red";

  tableParent.appendChild(errorParagraph);
};

/**
 * Get the ID of the table object
 *
 * @since 1.0.2
 *
 * @param row
 * @returns {string|string}
 */
export const getElementID = (row) => {
  let returnable;

  row.childNodes.forEach((element, index) => {
    switch (element.getAttribute("column")) {
      case "id":
      case "ID":
        returnable = element.innerText;
    }
  });

  return sanitizeHtml(returnable);
};

/**
 * Add a loader to a table column
 *
 * @since 1.0.2
 *
 * @param row
 * @returns {HTMLDivElement|boolean}
 */
export const columnAddLoader = (row) => {
  const children = row.childNodes;
  let existingLoader = false;

  children.forEach((element) => {
    if (element.classList.contains("tada-loader")) {
      existingLoader = element;
    }
  });

  if (existingLoader === false) {
    const loader = document.createElement("div");
    loader.classList.add("tada-loader");

    row.appendChild(loader);

    return loader;
  }

  return existingLoader;
};
