const Input = ({ value, onInputChange }) => {
  return (
    <>
      <input
        value={value}
        onChange={onInputChange}
        className="bg-blue-50 rounded-l-lg h-10 p-4"
      />
    </>
  );
};

export default Input;
