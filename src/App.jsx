import { useState, useRef } from "react";
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

  const resumeRef = useRef(null);

  // Resets all data to the sample data.
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

      <div className="w-full gap-6 p-6 lg:grid lg:p-0 lg:grid-cols-10 2xl:grid-cols-2">
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
        <div className="mt-6 lg:mt-0 lg:col-span-6 2xl:col-span-1">
          <div className="2xl:h-[calc(100vh-74px)] aspect-[1/1.3] h-full lg:h-auto lg:w-auto lg:py-6 lg:pe-6 2xl:pe-0 2xl:fixed">
            <Resume
              personalDetails={personalDetails}
              education={education}
              experience={experience}
              resumeRef={resumeRef}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
