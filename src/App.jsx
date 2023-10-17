import Resume from "./components/Resume.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="w-screen grid grid-cols-2 gap-8">
      {/* Left side of the page. */}
      <Sidebar />

      {/* Right side of the page. */}
      <div className="w-full h-screen p-4">
        <Resume />
      </div>
    </div>
  );
}

export default App;
