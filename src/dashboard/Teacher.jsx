import { useState } from "react";
import { 
  FaUser, FaHome, FaCog, FaMoneyBill, FaUsers, FaComments, 
  FaHeadset, FaSignOutAlt, FaBars, FaMoon, FaSun, FaPalette 
} from "react-icons/fa";

function TeacherDashboard() {
  const [currentPage, setCurrentPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState("blue");

  const renderPage = () => {
    switch (currentPage) {
      case "profile":
        return <TeacherProfile />;
      case "students":
        return <ViewStudents />;
      case "chat":
        return <TeacherChat />;
      case "settings":
        return <Settings />;
      case "payments":
        return <PaymentManagement />;
      case "support":
        return <Support />;
      default:
        return <TeacherHome />;
    }
  };

  const colorThemes = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    default: "bg-gray-500",
  };

  return (
    <div className={`min-h-screen p-4 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <button onClick={() => setMenuOpen(true)} className="text-2xl">
          <FaBars />
        </button>
        <div className="flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
          <button>
            <FaPalette 
              size={24} 
              onClick={() => setThemeColor(themeColor === "blue" ? "green" : themeColor === "green" ? "purple" : themeColor === "purple" ? "default" : "blue")} 
            />
          </button>
        </div>
      </div>

      {/* Side Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 shadow-md p-4 transform ${menuOpen ? "translate-x-0" : "-translate-x-64"} transition-transform duration-300 ${colorThemes[themeColor]} text-white`}>
        <button onClick={() => setMenuOpen(false)} className="text-right text-lg font-bold">&times;</button>
        <ul className="mt-4 space-y-4">
          <li onClick={() => { setCurrentPage("profile"); setMenuOpen(false); }} className="flex items-center cursor-pointer">
            <FaUser className="mr-2" /> Profile
          </li>
          <li onClick={() => { setCurrentPage("home"); setMenuOpen(false); }} className="flex items-center cursor-pointer">
            <FaHome className="mr-2" /> Home
          </li>
          <li onClick={() => { setCurrentPage("settings"); setMenuOpen(false); }} className="flex items-center cursor-pointer">
            <FaCog className="mr-2" /> Settings
          </li>
          <li onClick={() => { setCurrentPage("payments"); setMenuOpen(false); }} className="flex items-center cursor-pointer">
            <FaMoneyBill className="mr-2" /> Payment Management
          </li>
          <li onClick={() => { setCurrentPage("students"); setMenuOpen(false); }} className="flex items-center cursor-pointer">
            <FaUsers className="mr-2" /> View Students
          </li>
          <li onClick={() => { setCurrentPage("chat"); setMenuOpen(false); }} className="flex items-center cursor-pointer">
            <FaComments className="mr-2" /> Chat
          </li>
          <li onClick={() => { setCurrentPage("support"); setMenuOpen(false); }} className="flex items-center cursor-pointer">
            <FaHeadset className="mr-2" /> Support
          </li>
          <li className="flex items-center cursor-pointer text-red-500" onClick={() => setMenuOpen(false)}>
            <FaSignOutAlt className="mr-2" /> Exit
          </li>
        </ul>
      </div>

      {/* Page Content */}
      {renderPage()}
    </div>
  );
}

/* Pages */
function TeacherHome() {
  return <div className="text-center mt-10 text-xl">Welcome to your Teacher Dashboard!</div>;
}

function TeacherProfile() {
  return <div className="text-center mt-10">Update your profile details here.</div>;
}

function ViewStudents() {
  return <div className="text-center mt-10">List of students assigned to you.</div>;
}

function TeacherChat() {
  return <div className="text-center mt-10">Chat with your students.</div>;
}

function Settings() {
  return <div className="text-center mt-10">Settings Page</div>;
}

function PaymentManagement() {
  return <div className="text-center mt-10">Manage your payments.</div>;
}

function Support() {
  return <div className="text-center mt-10">Support & Help Center.</div>;
}

export default TeacherDashboard;
