import { useEffect, useState } from "react";
import { Login } from "../common/models/login";
import ValidateLogin from "./validateLogin";

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
    if (Object.keys(errors).length > 0) return;
    console.log("Submit login!", login);
  }, [errors]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input id="userName" name="userName" type="text" onChange={handleChange} value={login.userName} />
        {errors.userName && <p>{errors.userName}</p>}

        <label>Password</label>
        <input id="password" name="password" type="text" onChange={handleChange} value={login.password} />
        {errors.password && <p>{errors.password}</p>}

        <label>Name</label>
        <input id="name" name="name" type="text" onChange={handleChange} value={login.name} />
        {errors.name && <p>{errors.name}</p>}

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
