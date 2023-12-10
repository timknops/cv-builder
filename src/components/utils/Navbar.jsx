import Button from "./button/Button";
import SampleDataButtons from "./button/SampleDataButtons";

const Navbar = ({ resetAllData, loadSampleData }) => {
  return (
    <nav className="sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
      <h1 className="w-3/12 text-red-900 font-extrabold text-2xl">
        CV-Builder
      </h1>

      <div className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <SampleDataButtons
            resetAllData={resetAllData}
            loadSampleData={loadSampleData}
          />
        </ul>
      </div>

      <div className="w-3/12 flex justify-end">
        <Button type="submit" text="Download" icon="fa-solid fa-download" />
      </div>
    </nav>
  );
};

export default Navbar;