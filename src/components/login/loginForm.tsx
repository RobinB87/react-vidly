import { useEffect, useState } from "react";
import { Login } from "../common/models/login";
import ValidateLogin from "./validateLogin";
import Input from "../common/input";
import "../../index.css";

const LoginForm = () => {
  const [login, setLogin] = useState<Login>({ userName: "", password: "", name: "" });
  const [errors, setErrors] = useState({} as any);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setErrors(ValidateLogin(login));
  };

  useEffect(() => {
    // Errors object can change when handleSubmit is clicked.
    // This effect is fired when errors object changes.
    // When no error keys exist in the errors object, the console log is fired.
    debugger;
    if (Object.keys(errors).length > 0) return;
    console.log("Submit login!", login);
    // Here I can for example perform a callback function, which can be added as a param of this login form
  }, [errors]);

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input name="userName" label="Username" value={login.userName} onChange={handleChange} errors={errors} />
        <Input name="password" label="Password" value={login.password} onChange={handleChange} errors={errors} />
        <Input name="name" label="Name" value={login.name} onChange={handleChange} errors={errors} />

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
