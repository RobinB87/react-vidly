const TableHeader = ({ columns, sortColumn, onSort }: any) => {
  const raiseSort = (path: string) => {
    const sortColumnNew = { ...sortColumn };
    if (sortColumnNew.path === path) sortColumnNew.order = sortColumnNew.order === "asc" ? "desc" : "asc";
    else {
      sortColumnNew.path = path;
      sortColumnNew.order = "asc";
    }

    onSort(sortColumnNew);
  };

  const renderSortIcon = (column: any) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <thead>
      <tr>
        {columns.map((column: any) => (
          <th className="clickable" key={column.path ?? column.key} onClick={() => raiseSort(column.path)}>
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
