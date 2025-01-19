const Table = ({ columns, data }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{row[col.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
