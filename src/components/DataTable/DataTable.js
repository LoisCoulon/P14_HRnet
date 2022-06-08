import { useState } from "react";

function DataTable({ data }) {
  const columns = [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
  ];

  return (
    <table className="data-table">
      <thead>
        <tr role="row">
          {columns.map((column) => (
            <th
              key={column.data}
              className="sorting"
              tabIndex="0"
              aria-controls="employee-table"
              rowSpan="1"
              colSpan="1"
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr role="row" className="odd">
          <td className="sorting_1"></td>
          <td></td>
          <td></td>
          <td>Sales</td>
          <td></td>
          <td></td>
          <td></td>
          <td>AL</td>
          <td></td>
        </tr>
        <tr role="row" className="even">
          <td className="sorting_1"></td>
          <td></td>
          <td></td>
          <td>Sales</td>
          <td></td>
          <td></td>
          <td></td>
          <td>AL</td>
          <td></td>
        </tr>
        <tr role="row" className="odd">
          <td className="sorting_1"></td>
          <td></td>
          <td></td>
          <td>Sales</td>
          <td></td>
          <td></td>
          <td></td>
          <td>AL</td>
          <td></td>
        </tr>
        <tr role="row" className="even">
          <td className="sorting_1"></td>
          <td></td>
          <td></td>
          <td>Sales</td>
          <td></td>
          <td></td>
          <td></td>
          <td>AL</td>
          <td></td>
        </tr>
        <tr role="row" className="odd">
          <td className="sorting_1"></td>
          <td></td>
          <td></td>
          <td>Sales</td>
          <td></td>
          <td></td>
          <td></td>
          <td>AL</td>
          <td></td>
        </tr>
        <tr role="row" className="even">
          <td className="sorting_1">bob</td>
          <td>marley</td>
          <td>05/18/2022</td>
          <td>Legal</td>
          <td>06/02/1945</td>
          <td>kingston av</td>
          <td>miami</td>
          <td>FL</td>
          <td>420</td>
        </tr>
      </tbody>
    </table>
  );
}

export default DataTable;
