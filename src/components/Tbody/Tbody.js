import PropTypes from "prop-types";

function Tbody({ tableData, columns }) {
  function addClassname(id) {
    let value = "";

    if (id % 2 === 0) {
      value = "even";
    } else {
      value = "odd";
    }
    return value;
  }

  return (
    <tbody>
      {tableData.map((data, index) => (
        <tr key={index} role="row" className={addClassname(index)}>
          {columns.map(({ accessor }) => {
            const tData = data[accessor] ? data[accessor] : "——";
            return (
              <td key={accessor} className="sorting_1">
                {tData}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}

Tbody.propTypes = {
  tableData: PropTypes.array,
  columns: PropTypes.array,
};

export default Tbody;
