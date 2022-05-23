import { NavLink } from "react-router-dom";

function List() {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <NavLink to={`/`}>Home</NavLink>
    </div>
  );
}

export default List;