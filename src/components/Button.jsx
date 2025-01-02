const Button = ({ onButtonClick }) => {
  return (
    <button
      className="h-10 w-14 bg-blue-400 text-stone-200 back w-8 h-8 rounded-r-lg hover:bg-blue-400 active:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
      onClick={onButtonClick}
    >
      <span className="text-xl">+</span>
    </button>
  );
};

export default Button;
