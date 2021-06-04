import Input from "../common/form/input";
import useForm from "../common/hooks/useForm";
import { Movie } from "../common/models/movie";

const MovieForm = ({ match, history }: any) => {
  const doSubmit = () => {
    // todo use fake backend service
    console.log("Submit to movies controller!", inputs);
  };

  const validate = () => {};

  const { inputs, errors, handleChange, handleSubmit } = useForm<Movie>(
    { title: "", genre: "", numberInStock: 0, rate: 0 },
    validate,
    doSubmit
  );

  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>

      <form onSubmit={handleSubmit}>
        <Input name="title" label="Title" value={inputs} onChange={handleChange} errors={errors} />
        <Input name="genre" label="Genre" value={inputs} onChange={handleChange} errors={errors} />
        <Input
          name="numberInStock"
          label="Number in Stock"
          value={inputs}
          onChange={handleChange}
          errors={errors}
          type="number"
        />
        <Input name="rate" label="Rate" value={inputs} onChange={handleChange} errors={errors} type="number" />

        <button className="btn btn-primary" onClick={() => history.push("/movies")}>
          Save
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
