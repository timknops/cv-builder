import Button from "./button/Button";
import SampleDataButtons from "./button/SampleDataButtons";

/**
 * Navbar component.
 *
 * @component
 * @param {Function} resetAllData - The function to reset all data.
 * @param {Function} loadSampleData - The function to load sample data.
 * @returns {JSX.Element} The rendered Navbar component.
 */
const Navbar = ({ resetAllData, loadSampleData }) => {
  return (
    <nav className="sticky top-0 bg-white shadow-md flex items-center justify-center px-6 2xl:px-8">
      <div className=" grid grid-cols-10 2xl:grid-cols-2 items-center w-full">
        <div className="hidden md:flex items-center h-full col-span-4 2xl:col-span-1">
          <h1 className="hidden md:block text-red-900 font-extrabold text-2xl">
            CV-Builder
          </h1>
        </div>

        <ul className="flex items-center justify-center col-span-10 md:justify-end md:col-span-6 2xl:col-span-1">
          <SampleDataButtons
            resetAllData={resetAllData}
            loadSampleData={loadSampleData}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
