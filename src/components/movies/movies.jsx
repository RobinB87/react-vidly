import React, { Component } from "react";
import { getMovies } from "../../services/fakeMovieService";
import ListGroup from "./listGroup";
import Like from "../common/like";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import { getGenres } from "../../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: {},
    currentPage: 1,
    pageSize: 4,
  };

  // With hooks:
  //   const [genres, setGenres] = useState([] as any);
  //   useEffect(() => {
  //     setGenres(getGenres());
  //   }, []);

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
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
    this.setState({ selectedGenre: genre });
  };

  render() {
    const { length: numberOfMovies } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    if (numberOfMovies === 0) return <p>There are no movies in the database!</p>;

    const movies = paginate(allMovies, currentPage, pageSize);

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
          <p>There are {numberOfMovies} movies in the database.</p>

          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
                  </td>
                  <td>
                    <button onClick={() => this.handleDelete(movie._id)} className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
