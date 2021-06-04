import useForm from "../common/hooks/useForm";
import LoginBaseForm from "../common/form/loginForm";
import { Login } from "../common/models/login";
import ValidateLogin from "./validateLogin";

const RegisterForm = () => {
  const doSubmit = () => {
    console.log("Submit to register controller!", inputs);
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
      title="Register"
      data={inputs}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default RegisterForm;
