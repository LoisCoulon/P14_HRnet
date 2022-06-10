import { useState } from "react";

function Thead({ columns, handleSorting }) {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr role="row">
        {columns.map(({ title, accessor, sortable }) => {
          const cl = sortable
            ? sortField && sortField === accessor && order === "asc"
              ? "up"
              : sortField && sortField === accessor && order === "desc"
              ? "down"
              : "default"
            : "";
          return (
            <th
              key={accessor}
              onClick={sortable ? () => handleSortingChange(accessor) : null}
              className={cl}
            >
              {title}
            </th>
          );
        })}
        {/* {columns.map((column) => (
          <th
            key={column.data}
            className="sorting"
            tabIndex="0"
            aria-controls="employee-table"
            rowSpan="1"
            colSpan="1"
          >
            {column.title}
            <button onClick={onSortChange}>
              <i className={fontAwesome} />
            </button>
          </th>
        ))} */}
      </tr>
    </thead>
  );
}

export default Thead;
