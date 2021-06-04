const Input = ({ name, label, value, onChange, errors }: any) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        id={name}
        name={name}
        type="text"
        onChange={onChange}
        value={value}
        className={`form-control ${errors[name] && "inputError"}`}
      />
      {errors[name] && <p className="error">{errors[name]}</p>}
    </div>
  );
};

export default Input;
