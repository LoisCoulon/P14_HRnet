import { useState } from "react";
import DataTable from "../../components/DataTable/DataTable";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";

function List() {
  const [entry, setEntry] = useState(0);
  const [currentEntry, setCurrentEntry] = useState(0);

  return (
    <div id="employee-div" className="wrapper">
      <Header title="Current Employees" link="/" linkName="Home"></Header>
      <div className="employee-table">
        <div className="employee-table--header">
          <div>
            Show{" "}
            <select>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>{" "}
            entries
          </div>
          <Input id="search" name="Search : " type="text"></Input>
        </div>
        <div className="employee-table--body">
          <DataTable></DataTable>
        </div>
        <div className="employee-table--footer">
          <span>
            Showing {currentEntry} of {entry} entries
          </span>
          <div>
            <button className="previous">Previous</button>
            <button className="page-number">1</button>
            <button className="next">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
