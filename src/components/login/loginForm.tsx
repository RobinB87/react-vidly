import { Login } from "../common/models/login";
import LoginBaseForm from "../common/form/loginForm";
import useForm from "../common/hooks/useForm";
import "../../index.css";
import ValidateLogin from "./validateLogin";

const LoginForm = () => {
  const doSubmit = () => {
    console.log("Submit to login controller!", inputs);
  };

  const { inputs, errors, handleChange, handleSubmit } = useForm<Login>(
    {
      userName: "",
      password: "",
      name: "",
    },
    ValidateLogin,
    doSubmit
  );

  return (
    <LoginBaseForm
      title="Login"
      data={inputs}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default LoginForm;
