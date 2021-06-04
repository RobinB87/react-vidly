import React, { Component } from "react";
import Pagination from "../common/pagination";
import _ from "lodash";

import { getMovies } from "../../services/fakeMovieService";
import ListGroup from "../common/listGroup";
import MoviesTable from "./moviesTable";
import { paginate } from "../../utils/paginate";
import { getGenres } from "../../services/fakeGenreService";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
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
    const genres = [{ _id: "", name: " All Genres" }, ...getGenres()];
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

  getPagedData = () => {
    const { pageSize, currentPage, movies: allMovies, selectedGenre, sortColumn } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id ? allMovies.filter((m) => m.genre._id === selectedGenre._id) : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  // TODO:
  // button: add movies
  // create a form in that page
  // title, genre (dropdown), nubmer in stock (0 - 100), rate (0 to 10)
  // if you are in a movie/:id and change the id in the url, to a non existing movie (id), and then click back: go back to movie

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;
    if (count === 0) return <p>There are no movies in the database!</p>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        {/* div with width 3 */}
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>

        {/* div col will take up rest of the space */}
        <div className="col">
          <Link to="/movies/new" className="btn btn-primary">
            Add
          </Link>
          <p>There are {totalCount} movies in the database.</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
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
