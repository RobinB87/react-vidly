import Input from "./input";

const LoginBaseForm = ({ title, data, handleSubmit, handleChange, errors }: any) => {
  return (
    <div>
      <h1>{title}</h1>

      <form onSubmit={handleSubmit}>
        <Input name="userName" label="Username" value={data.userName} onChange={handleChange} errors={errors} />
        <Input
          name="password"
          label="Password"
          type={"password"}
          value={data.password}
          onChange={handleChange}
          errors={errors}
        />
        <Input name="name" label="Name" value={data.name} onChange={handleChange} errors={errors} />

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginBaseForm;
