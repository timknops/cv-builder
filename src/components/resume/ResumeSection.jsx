import ResumeSectionItem from "./ResumeSectionItem.jsx";

/**
 * Renders a section of the resume.
 *
 * @param {String} sectionTitle - The title of the section.
 * @param {Array} data - The data to display in the section.
 * @returns {JSX.Element} The rendered section
 */
const ResumeSection = ({ sectionTitle, data }) => {
  return (
    <div className="w-full p-5 pb-0">
      <h3 className="text-red-900 text-xl font-extrabold">{sectionTitle}</h3>
      <hr className="h-1 my-1 bg-gray-200 border-0 rounded " />

      <div className="flex flex-col gap-2">
        {data.map((item) => (
          <ResumeSectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ResumeSection;
