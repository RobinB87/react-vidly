import { useEffect, useState } from "react";

const useForm = <T>(initialInputs: T, validate: any, callback: any) => {
    const [inputs, setInputs] = useState<T>(initialInputs);
    const [errors, setErrors] = useState({} as any);


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(validate(inputs));
    };

    useEffect(() => {
        // Errors object can change when handleSubmit is clicked.
        // This effect is fired when errors object changes.
        // When no error keys exist in the errors object, the console log is fired.
        if (Object.keys(errors).length > 0) return;

        callback();
        // Here I can for example perform a callback function, which can be added as a param of this login form
    }, [errors]);

    return { inputs, errors, handleChange, handleSubmit }
}

export default useForm;