import { useState } from "react";
import Resume from "./components/resume/Resume.jsx";
import Sidebar from "./components/Sidebar.jsx";
import sampleData from "./sample_data.js";

const App = () => {
  const [personalDetails, setPersonalDetails] = useState(
    sampleData.personalDetails
  );
  const [education, setEducation] = useState(sampleData.education);

  return (
    <div className="w-screen grid grid-cols-2 gap-6">
      {/* Left side of the page. */}
      <Sidebar
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        education={education}
        setEducation={setEducation}
      />

      {/* Right side of the page. */}
      <div className="relative">
        <div className="w-full h-screen py-6 fixed">
          <Resume personalDetails={personalDetails} />
        </div>
      </div>
    </div>
  );
};

export default App;
