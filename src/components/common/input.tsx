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
        className={`form-control ${errors.userName && "inputError"}`}
      />
      {errors.userName && <p className="error">{errors.userName}</p>}
    </div>
  );
};

export default Input;
