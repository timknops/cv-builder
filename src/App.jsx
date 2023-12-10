import { useState } from "react";
import Resume from "./components/resume/Resume.jsx";
import Sidebar from "./components/Sidebar.jsx";
import sampleData from "./sample_data.js";
import Navbar from "./components/utils/Navbar.jsx";

const App = () => {
  const [personalDetails, setPersonalDetails] = useState(
    sampleData.personalDetails
  );
  const [education, setEducation] = useState(sampleData.education);
  const [experience, setExperience] = useState(sampleData.experience);

  const resetAllData = () => {
    setPersonalDetails({
      fullName: "",
      title: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
    setEducation([]);
    setExperience([]);
  };

  const loadSampleData = () => {
    setPersonalDetails(sampleData.personalDetails);
    setEducation(sampleData.education);
    setExperience(sampleData.experience);
  };

  return (
    <>
      <Navbar resetAllData={resetAllData} loadSampleData={loadSampleData} />

      <div className="w-full grid grid-cols-10 2xl:grid-cols-2 gap-6">
        {/* Left side of the page. */}
        <Sidebar
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience}
        />

        {/* Right side of the page. */}
        <div className="col-span-6 2xl:col-span-1">
          <div className="2xl:h-[calc(100vh-74px)] h-full w-auto py-6 pe-6 2xl:pe-0 aspect-[1/1.3] 2xl:fixed">
            <Resume
              personalDetails={personalDetails}
              education={education}
              experience={experience}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
