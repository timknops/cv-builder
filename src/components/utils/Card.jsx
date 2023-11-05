const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-lg p-7 h-fit shadow-sm w-full">
      {children}
    </div>
  );
};

export default Card;
