import { Login } from "../common/models/login";

const ValidateLogin = (login: Login) => {
    let errors = {} as any;

    if (!login.userName) {
        errors.userName = "Username is required"
    }
    if (!login.password) {
        errors.password = "Password is required"
    }
    if (!login.name) {
        errors.name = "Name is required"
    }
    return errors;
}

export default ValidateLogin;