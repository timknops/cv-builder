import PropTypes from "prop-types";

export function Card({ cardTitle }) {
  console.log(cardTitle);

  return (
    <div className="bg-white rounded p-5 shadow-sm">
      {cardTitle && <h4 className="font-bold">{cardTitle}</h4>}
    </div>
  );
}

Card.propTypes = {
  cardTitle: PropTypes.string,
};
