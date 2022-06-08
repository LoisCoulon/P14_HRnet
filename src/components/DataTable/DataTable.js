import Thead from "../Thead/Thead";
import Tbody from "../Tbody/Tbody";

function DataTable({ datas, columns }) {
  return (
    <table className="data-table">
      <Thead columns={columns}></Thead>
      <Tbody datas={datas}></Tbody>
    </table>
  );
}

export default DataTable;
