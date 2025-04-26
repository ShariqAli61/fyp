// function AssignedTeacher() {
//     return <div className="text-center mt-10">Your assigned teacher details.</div>;
//   }
  
//   export default AssignedTeacher;
  

import { useState } from "react";

export default function AssignedTeacher() {
  const [teacher, setTeacher] = useState({
    name: "Mr. Ali Khan",
    subject: "Mathematics",
    email: "ali.khan@tutormatch.com",
    phone: "+92 300 1234567",
    sessionsCompleted: 15,
    progress: "Good progress in Algebra and Geometry",
  });

  const [sessionRequests, setSessionRequests] = useState([]);
  const [newSessionDate, setNewSessionDate] = useState("");
  const [newSessionTime, setNewSessionTime] = useState("");
  const [teacherChangeRequested, setTeacherChangeRequested] = useState(false);

  const handleScheduleSession = () => {
    if (newSessionDate && newSessionTime) {
      setSessionRequests([
        ...sessionRequests,
        { date: newSessionDate, time: newSessionTime },
      ]);
      setNewSessionDate("");
      setNewSessionTime("");
    }
  };

  const handleRequestTeacherChange = () => {
    setTeacherChangeRequested(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Assigned Teacher</h1>

      {/* Teacher Info */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-2">{teacher.name}</h2>
        <p className="text-gray-600 dark:text-gray-300">Subject: {teacher.subject}</p>
        <p className="text-gray-600 dark:text-gray-300">Email: {teacher.email}</p>
        <p className="text-gray-600 dark:text-gray-300">Phone: {teacher.phone}</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Sessions Completed: {teacher.sessionsCompleted}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Progress: {teacher.progress}</p>
      </div>

      {/* Schedule/Reschedule Class */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Schedule or Reschedule a Class</h2>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="date"
            value={newSessionDate}
            onChange={(e) => setNewSessionDate(e.target.value)}
            className="p-2 border rounded-md mb-4 md:mb-0 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="time"
            value={newSessionTime}
            onChange={(e) => setNewSessionTime(e.target.value)}
            className="p-2 border rounded-md mb-4 md:mb-0 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleScheduleSession}
            className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Schedule
          </button>
        </div>
      </div>

      {/* Session History */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Session Requests</h2>
        {sessionRequests.length > 0 ? (
          <ul className="space-y-2">
            {sessionRequests.map((session, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-300">
                📅 {session.date} at {session.time}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No session requests yet.</p>
        )}
      </div>

      {/* Request Teacher Change */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Request a Teacher Change</h2>
        {teacherChangeRequested ? (
          <p className="text-green-500 font-semibold">
            ✅ Your request for a teacher change has been submitted!
          </p>
        ) : (
          <button
            onClick={handleRequestTeacherChange}
            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
          >
            Request Change
          </button>
        )}
      </div>
    </div>
  );
}
