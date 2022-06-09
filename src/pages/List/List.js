import { useState } from "react";
import { usePagination } from "react-table";
import DataTable from "../../components/DataTable/DataTable";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import { datas, columns } from "../../data";
import ReactPaginate from "react-paginate";

function List() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [employeesPerPage, setEmployeesPerPage] = useState(10);
  const numberOfEmployeesVisited = page * employeesPerPage;
  const totalPages = Math.ceil(datas.length / employeesPerPage);

  //search function
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const data = datas
    .filter(
      (item) =>
        item.city.toString().toLowerCase().includes(search) ||
        item.department.toString().toLowerCase().includes(search) ||
        item.firstName.toString().toLowerCase().includes(search) ||
        item.dateOfBirth.toString().toLowerCase().includes(search) ||
        item.lastName.toString().toLowerCase().includes(search) ||
        item.startDate.toString().toLowerCase().includes(search) ||
        item.state.toString().toLowerCase().includes(search) ||
        item.street.toString().toLowerCase().includes(search) ||
        item.zipCode.toString().toLowerCase().includes(search)
    )
    .slice(
      numberOfEmployeesVisited,
      numberOfEmployeesVisited + employeesPerPage
    );

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div id="employee-div" className="wrapper">
      <Header title="Current Employees" link="/" linkName="Home"></Header>
      <div className="employee-table">
        <div className="employee-table--header">
          <div>
            Show{" "}
            <select>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>{" "}
            entries
          </div>
          <Input
            id="search"
            name="Search : "
            type="text"
            onChange={handleSearch}
          ></Input>
        </div>
        <div className="employee-table--body">
          <DataTable columns={columns} datas={data}></DataTable>
        </div>
        <div className="employee-table--footer">
          <span>
            Showing{" "}
            {data.length < employeesPerPage ? data.length : employeesPerPage} of{" "}
            {datas.length} entries
          </span>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={totalPages}
            onPageChange={changePage}
            containerClassName={"navigationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"navigationDisabled"}
            activeClassName={"navigationActive"}
          ></ReactPaginate>
        </div>
      </div>
    </div>
  );
}

export default List;
