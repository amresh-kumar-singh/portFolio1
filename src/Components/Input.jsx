import "./input.css";

const Input = ({ type, placeholder, required, label, handleChange, value }) => {
  return (
    <span>
      <input
        className="gate"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        required={required}
        value={value}
      />
      <label htmlFor="class">{label}</label>
    </span>
  );
};
export default Input;
