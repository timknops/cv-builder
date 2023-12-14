/**
 * Renders a single education item in the resume.
 *
 * @param {Object} item - The item containing the data to display.
 * @returns {JSX.Element} The rendered item.
 */
const ResumeSectionItem = ({ item }) => {
  // Split the description into an array of strings, separated by the period, except the last one.
  const formatDescription = () => {
    const descriptionArray = item.description.split(".");

    // Remove the last element of the array, if the last element is an empty string.
    if (descriptionArray[descriptionArray.length - 1] === "") {
      descriptionArray.pop();
    }

    return descriptionArray.map((description) => (
      <li className="list-disc list-outside" key={`${item.id}-${description}`}>
        {description.trim()}
      </li>
    ));
  };

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col justify-center">
        <h4 className="font-semibold">{item.title}</h4>
        <p className="italic">{item.subTitle}</p>
      </div>

      <div className="flex flex-col items-end justify-center">
        <p>
          {item.startYear}

          {/** Only display dash if both startYear and endYear are provided */}
          {item.startYear !== "" && item.endYear !== "" && " - "}

          {item.endYear}
        </p>
        <p>{item.location}</p>
      </div>
      {item.description && (
        <div className="col-span-2">
          <ul className="list-disc list-inside ps-5">{formatDescription()}</ul>
        </div>
      )}
    </div>
  );
};

export default ResumeSectionItem;
