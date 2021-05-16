import React, { Component } from "react";
import { getMovies } from "../../services/fakeMovieService";
import ListGroup from "./listGroup";
import MoviesTable from "./moviesTable";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import { getGenres } from "../../services/fakeGenreService";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: {},
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  // With hooks:
  //   const [genres, setGenres] = useState([] as any);
  //   useEffect(() => {
  //     setGenres(getGenres());
  //   }, []);

  componentDidMount() {
    const genres = [{ name: " All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movieId) => {
    const movies = this.state.movies.filter((movie) => movie._id !== movieId);
    // this.setState({ movies: movies }); // this is not required as key and name are equal
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    // also set current page to 1, otherwise pagination is stuck on last selected page when switching from all genres to another genre
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { pageSize, currentPage, movies: allMovies, genres, selectedGenre, sortColumn } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id ? allMovies.filter((m) => m.genre._id === selectedGenre._id) : allMovies;
    const numberOfMovies = filtered.length;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    if (numberOfMovies === 0) return <p>There are no movies in the database!</p>;

    return (
      <div className="row">
        {/* div with width 3 */}
        <div className="col-3">
          <ListGroup items={genres} selectedItem={selectedGenre} onItemSelect={this.handleGenreSelect} />
        </div>

        {/* div col will take up rest of the space */}
        <div className="col">
          <p>There are {numberOfMovies} movies in the database.</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={numberOfMovies}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
