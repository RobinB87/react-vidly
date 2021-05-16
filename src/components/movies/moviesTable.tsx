import Like from "../common/like";
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";

const MoviesTable = (props: any) => {
  const { movies, onDelete, onLike, onSort, sortColumn } = props;

  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like", content: (movie: any) => <Like liked={movie.liked} onClick={() => onLike(movie)} /> },
    {
      key: "delete",
      content: (movie: any) => (
        <button onClick={() => onDelete(movie._id)} className="btn btn-danger btn-sm">
          Delete
        </button>
      ),
    },
  ];

  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={movies} />
    </table>
  );
};

export default MoviesTable;
