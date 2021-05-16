const TableHeader = (props: any) => {
  const { columns, sortColumn, onSort } = props;

  const raiseSort = (path: string) => {
    const sortColumn = { ...props.sortColumn };
    if (sortColumn.path === path) sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    props.onSort(sortColumn);
  };

  return (
    <thead>
      <tr>
        {columns.map((column: any) => (
          <th key={column.path ?? column.key} onClick={() => raiseSort(column.path)}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
