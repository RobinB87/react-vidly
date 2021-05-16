import _ from "lodash";

const TableBody = (props: any) => {
  const { data, columns } = props;

  return (
    <tbody>
      {data.map((item: any) => (
        <tr>
          {columns.map((column: any) => (
            <td>{_.get(item, column.path)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
