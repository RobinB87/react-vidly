import { useState } from "react";
import { Login } from "../common/models/login";

const LoginForm = () => {
  const [login, setLogin] = useState<Login>({ userName: "", password: "", name: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Submit login!", login);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input id="userName" name="userName" type="text" onChange={handleChange} value={login.userName}></input>
        <label>Password</label>
        <input id="password" name="password" type="text" onChange={handleChange} value={login.password}></input>
        <label>Name</label>
        <input id="name" name="name" type="text" onChange={handleChange} value={login.name}></input>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
