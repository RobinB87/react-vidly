import _ from "lodash";

const TableBody = (props: any) => {
  const { data, columns } = props;

  const renderCell = (item: any, column: any) => {
    // the content is a function
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  const createKey = (item: any, column: any) => {
    return item._id + (column.path ?? column.key);
  };

  return (
    <tbody>
      {data.map((item: any) => (
        <tr key={item._id}>
          {columns.map((column: any) => (
            <td key={createKey(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
