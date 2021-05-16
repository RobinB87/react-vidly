const TableHeader = (props: any) => {
  const { columns, sortColumn, onSort } = props;

  const raiseSort = (path: string) => {
    const sortColumnNew = { ...sortColumn };
    if (sortColumnNew.path === path) sortColumnNew.order = sortColumnNew.order === "asc" ? "desc" : "asc";
    else {
      sortColumnNew.path = path;
      sortColumnNew.order = "asc";
    }

    onSort(sortColumnNew);
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
