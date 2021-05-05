import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movieId) => {
    const movies = this.state.movies.filter((movie) => movie._id !== movieId);
    // this.setState({ movies: movies }); // this is not required as key and name are equal
    this.setState({ movies });
  };

  render() {
    if (this.state.movies.length === 0) {
      return <div>There are no movies!</div>;
    } else {
      return (
        <table class="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button onClick={() => this.handleDelete(movie._id)} className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }
}

export default Movies;
