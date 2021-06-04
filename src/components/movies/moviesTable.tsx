import Like from "../common/like";
import Table from "../common/table";
import { Link } from "react-router-dom";

const MoviesTable = ({ movies, onDelete, onLike, onSort, sortColumn }: any) => {
  const columns = [
    { path: "title", label: "Title", content: (movie: any) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
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

  return <Table columns={columns} data={movies} sortColumn={sortColumn} onSort={onSort} />;
};

export default MoviesTable;
