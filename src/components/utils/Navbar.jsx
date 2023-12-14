import Button from "./button/Button";
import SampleDataButtons from "./button/SampleDataButtons";

/**
 * Navbar component.
 *
 * @component
 * @param {Function} resetAllData - The function to reset all data.
 * @param {Function} loadSampleData - The function to load sample data.
 * @param {Function} downloadResume - The function to download the resume.
 * @returns {JSX.Element} The rendered Navbar component.
 */
const Navbar = ({ resetAllData, loadSampleData, downloadResume }) => {
  return (
    <nav className="sticky top-0 bg-white shadow-md flex items-center justify-center md:justify-between px-8 py-02">
      <h1 className="hidden md:block w-3/12 text-red-900 font-extrabold text-2xl">
        CV-Builder
      </h1>

      <div className="font-semibold text-lg">
        <ul className="flex items-center">
          <SampleDataButtons
            resetAllData={resetAllData}
            loadSampleData={loadSampleData}
          />
        </ul>
      </div>

      <div className="w-3/12 flex ms-2 md:ms-0 md:justify-end">
        <Button
          handleClick={downloadResume}
          type="submit"
          text="Download"
          icon="fa-solid fa-download"
        />
      </div>
    </nav>
  );
};

export default Navbar;
