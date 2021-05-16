import _ from "lodash";

const TableBody = (props: any) => {
  const { data, columns } = props;

  const renderCell = (item: any, column: any) => {
    // the content is a function
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  return (
    <tbody>
      {data.map((item: any) => (
        <tr>
          {columns.map((column: any) => (
            <td>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
