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
          <th
            className="sorting"
            tabIndex="0"
            aria-controls="employee-table"
            rowSpan="1"
            colSpan="1"
            aria-label="First Name: activate to sort column ascending"
            // style="width: 75px;"
          >
            First Name
          </th>
          {/* {columns.map((column) => {
                <th
                className="sorting"
                tabIndex="0"
                aria-controls="employee-table"
                rowSpan="1"
                colSpan="1"
              >
                  {column.title}
              </th>
            })} */}

          <th
            className="sorting"
            tabIndex="0"
            aria-controls="employee-table"
            rowSpan="1"
            colSpan="1"
            aria-label="Last Name: activate to sort column ascending"
            // style="width: 75px;"
          >
            Last Name
          </th>
          <th
            className="sorting"
            tabIndex="0"
            aria-controls="employee-table"
            rowSpan="1"
            colSpan="1"
            aria-label="Start Date: activate to sort column ascending"
            // style="width: 71px;"
          >
            Start Date
          </th>
          <th
            className="sorting"
            tabIndex="0"
            aria-controls="employee-table"
            rowSpan="1"
            colSpan="1"
            aria-label="Department: activate to sort column ascending"
            // style="width: 83px;"
          >
            Department
          </th>
          <th
            className="sorting"
            tabIndex="0"
            aria-controls="employee-table"
            rowSpan="1"
            colSpan="1"
            aria-label="Date of Birth: activate to sort column ascending"
            // style="width: 90px;"
          >
            Date of Birth
          </th>
          <th
            className="sorting"
            tabIndex="0"
            aria-controls="employee-table"
            rowSpan="1"
            colSpan="1"
            aria-label="Street: activate to sort column ascending"
            // style="width: 59px;"
          >
            Street
          </th>
          <th
            className="sorting"
            tabIndex="0"
            aria-controls="employee-table"
            rowSpan="1"
            colSpan="1"
            aria-label="City: activate to sort column ascending"
            // style="width: 30px;"
          >
            City
          </th>
          <th
            className="sorting"
            tabIndex="0"
            aria-controls="employee-table"
            rowSpan="1"
            colSpan="1"
            aria-label="State: activate to sort column ascending"
            // style="width: 35px;"
          >
            State
          </th>
          <th
            className="sorting_asc"
            tabIndex="0"
            aria-controls="employee-table"
            rowSpan="1"
            colSpan="1"
            aria-label="Zip Code: activate to sort column descending"
            // style="width: 64px;"
            aria-sort="ascending"
          >
            Zip Code
          </th>
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
