import React from "react";

const Movies = ({ match }: any) => {
  return <h1>Movie Form {match.params.id}</h1>;
};

export default Movies;
