import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import { useState } from "react";

function App() {
  const [isSent, setIsSent] = useState(false);

  function saveEmployee() {
    setIsSent(true);
  }

  function closeModal() {
    setIsSent(false);
  }

  const employee = ["charles", "marie", "john", "cunégonde"];
  return (
    <div className="app">
      <Header
        title="HRnet"
        link="/employees"
        linkName="View Current Employees"
      ></Header>
      <div className="container">
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <div className="info">
            <Input id="first-name" name="First Name" type="text"></Input>
            <Input id="last-name" name="Last Name" type="text"></Input>
            <Input id="date-of-birth" name="Date of Birth" type="date"></Input>
            <Input id="start-date" name="Start Date" type="date"></Input>
          </div>

          <fieldset className="address">
            <legend>Address</legend>

            <Input
              className="address--element"
              id="street"
              name="Street"
              type="text"
            ></Input>
            <Input
              className="address--element"
              id="city"
              name="City"
              type="text"
            ></Input>
            <div className="address--element">
              <label htmlFor="state">State</label>
              <select name="state" id="state"></select>
            </div>

            <Input
              className="address--element"
              id="zip-code"
              name="Zip Code"
              type="number"
            ></Input>
          </fieldset>

          <label htmlFor="department">Department</label>
          {/* <Dropdown options={employee} defaultOption="Sélectionner"></Dropdown> */}
        </form>

        <button onClick={saveEmployee}>Save</button>
      </div>
      {isSent ? (
        <div className="blocker">
          <div id="confirmation" className="modal">
            Employee Created!
            <p className="close" onClick={closeModal}>
              x
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
