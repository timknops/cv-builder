const Button = ({ type, text, handleClick }) => {
  return (
    <>
      {type === "reset" ? (
        <button
          onClick={handleClick}
          type="reset"
          className="text-sm text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 font-medium px-5 py-2.5 hover:text-gray-900"
        >
          {text}
        </button>
      ) : (
        <button
          onClick={handleClick}
          type="submit"
          className="text-sm text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg inline-flex items-center px-5 py-2.5 text-center"
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
