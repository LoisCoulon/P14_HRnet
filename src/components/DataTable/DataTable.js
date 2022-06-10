import Thead from "../Thead/Thead";
import Tbody from "../Tbody/Tbody";
import { useState } from "react";

function DataTable({ datas, columns }) {
  const [tableData, setTableData] = useState(datas);

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };
  return (
    <table className="data-table">
      <Thead {...{ columns, handleSorting }}></Thead>
      <Tbody {...{ columns, tableData }}></Tbody>
    </table>
  );
}

export default DataTable;
