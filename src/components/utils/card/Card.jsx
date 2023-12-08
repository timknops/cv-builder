/**
 * Card component, used to maintain consistency in the app.
 *
 * @param {JSX.Element} children - The children to be rendered inside the card.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-lg p-7 h-fit shadow w-full">
      {children}
    </div>
  );
};

export default Card;
