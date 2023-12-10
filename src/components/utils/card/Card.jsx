/**
 * Card component, used to maintain consistency in the app.
 *
 * @param {JSX.Element} children - The children to be rendered inside the card.
 * @param {String} type - The type of card to be rendered. If type is "small", the card will be smaller.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = ({ children, type }) => {
  return (
    <>
      {type === "small" ? (
        <div className="bg-white rounded-lg p-4 h-fit shadow w-full grid grid-cols-3 gap-5">
          {children}
        </div>
      ) : (
        <div className="bg-white rounded-lg p-7 h-fit shadow w-full">
          {children}
        </div>
      )}
    </>
  );
};

export default Card;
