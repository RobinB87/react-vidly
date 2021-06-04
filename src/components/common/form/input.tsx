const Input = ({ name, label, value, onChange, errors, type = "text" }: any) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className={`form-control ${errors[name] && "inputError"}`}
      />
      {errors[name] && <div className="alert alert-danger">{errors[name]}</div>}
    </div>
  );
};

export default Input;
