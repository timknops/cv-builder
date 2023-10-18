import Resume from "./components/Resume.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { useState } from "react";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  return (
    <div className="w-screen grid grid-cols-2 gap-8">
      {/* Left side of the page. */}
      <Sidebar
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />

      {/* Right side of the page. */}
      <div className="w-full h-screen p-4">
        <Resume />
      </div>
    </div>
  );
}

export default App;
