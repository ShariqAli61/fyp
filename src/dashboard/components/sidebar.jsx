import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHome, FaCog, FaMoneyBill, FaChalkboardTeacher, FaComments, FaHeadset, FaSignOutAlt, FaBars } from "react-icons/fa";

function Sidebar({ themeColor, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const colorThemes = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    default: "bg-gray-500",
  };

  return (
    <>
      {/* Sidebar Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="p-3 text-2xl md:hidden">
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 p-4 transition-transform transform ${menuOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0 shadow-lg ${colorThemes[themeColor]} text-white`}>
        <button onClick={() => setMenuOpen(false)} className="text-right text-lg font-bold">&times;</button>
        <ul className="mt-4 space-y-4">
          <li><Link to="/studentRegistration/home" className="flex items-center"><FaHome className="mr-2" /> Home</Link></li>
          <li><Link to="/studentRegistration/profile" className="flex items-center"><FaUser className="mr-2" /> Profile</Link></li>
          <li><Link to="/studentRegistration/teacher" className="flex items-center"><FaChalkboardTeacher className="mr-2" /> Assigned Teacher</Link></li>
          <li><Link to="/studentRegistration/chat" className="flex items-center"><FaComments className="mr-2" /> Chat</Link></li>
          <li><Link to="/studentRegistration/payments" className="flex items-center"><FaMoneyBill className="mr-2" /> Payments</Link></li>
          <li><Link to="/studentRegistration/settings" className="flex items-center"><FaCog className="mr-2" /> Settings</Link></li>
          <li><Link to="/studentRegistration/support" className="flex items-center"><FaHeadset className="mr-2" /> Support</Link></li>

          <li onClick={() => { localStorage.removeItem("studentData"); navigate("/login"); }} className="flex items-center text-red-500 cursor-pointer">
            <FaSignOutAlt className="mr-2" /> Logout
          </li>

        </ul>
      </div>
    </>
  );
}

export default Sidebar;
