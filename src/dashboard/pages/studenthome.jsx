// function StudentHome() {
//     return <div className="text-center mt-10 text-xl">Welcome to your Student Dashboard!</div>;
//   }
  
//   export default StudentHome;


  
// src/dashboard/pages/studenthome.jsx
import { FaChalkboardTeacher, FaDollarSign, FaClock, FaBell } from "react-icons/fa";

export default function StudentHome() {
  const stats = [
    { label: "Total Classes", value: 12, icon: <FaChalkboardTeacher />, color: "bg-blue-500" },
    { label: "Total Earnings", value: "$350", icon: <FaDollarSign />, color: "bg-green-500" },
    { label: "Pending Requests", value: 3, icon: <FaClock />, color: "bg-yellow-500" },
  ];

  const upcomingSessions = [
    { title: "Math with Mr. Ali", date: "April 23, 2025", time: "4:00 PM" },
    { title: "Physics with Miss Sana", date: "April 25, 2025", time: "6:00 PM" },
  ];

  const notifications = [
    "Your request for English tutor has been approved.",
    "New class added by your assigned teacher.",
  ];

  const recentActivity = [
    "Completed Chemistry class with Mr. Ahmed.",
    "Requested session reschedule for Biology.",
    "Updated profile picture.",
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Student Dashboard Overview</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className={`p-4 rounded-xl text-white shadow-md flex items-center space-x-4 ${stat.color}`}>
            <div className="text-2xl">{stat.icon}</div>
            <div>
              <div className="text-lg font-semibold">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Sessions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
        <ul className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow space-y-2">
          {upcomingSessions.map((session, i) => (
            <li key={i} className="border-b pb-2 last:border-none">
              <div className="font-medium">{session.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{session.date} - {session.time}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Notifications */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center"><FaBell className="mr-2" /> Notifications</h2>
        <ul className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow space-y-2">
          {notifications.map((note, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-200">• {note}</li>
          ))}
        </ul>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow space-y-2">
          {recentActivity.map((activity, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-200">- {activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
