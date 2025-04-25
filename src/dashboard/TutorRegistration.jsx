import { useState } from "react";
import TeacherDashboard from "./Teacher"; // Import the dashboard

function TutorRegistration() {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    bio: "",
    username: "",
    password: "",
    confirmPassword: "",
    levels: [],
    education: "",
    timeZone: "",
    availability: [],
    subjects: [],
    instruments: [],
    studentStatus: "",
    consent: false,
  });

  const levelsList = ["Adult", "College", "High School", "Middle School", "Elementary"];
    const educationLevels = ["High School", "Bachelor’s Degree", "Master’s Degree", "PHD"];
  const subjectsList = [
    "Math", "Science", "History", "Algebra 1", "Algebra 2", "Calculus",
    "Chemistry", "Earth Science", "Geometry",
    "Statistics", "Physics", "web development"
  ];

  const instrumentsList = [
    "None", "Clarinet", "Flute", "French Horn", "Guitar", "Percussion",
    "Piano", "Saxophone", "Trombone", "Trumpet", "Tuba", "Violin", "Voice"
  ];
  const availabilityList = [
    "Mondays: mornings", "Mondays: afternoons", "Mondays: evenings",
    "Tuesdays: mornings", "Tuesdays: afternoons", "Tuesdays: evenings",
    "Wednesdays: mornings", "Wednesdays: afternoons", "Wednesdays: evenings",
    "Thursdays: mornings", "Thursdays: afternoons", "Thursdays: evenings",
    "Fridays: mornings", "Fridays: afternoons", "Fridays: evenings",
    "Saturdays: mornings", "Saturdays: afternoons", "Saturdays: evenings",
    "Sundays: mornings", "Sundays: afternoons", "Sundays: evenings"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;   
    if (type === "checkbox") {
      if (name === "consent") {
        setFormData({ ...formData, [name]: checked });
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [name]: checked
            ? [...prevState[name], value]
            : prevState[name].filter((item) => item !== value),
        }));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.consent) {
      alert("You must consent to the background check.");
      return;
    }
    setRegistered(true);
  };

  if (registered) {
    return <TeacherDashboard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300 p-6 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-xl rounded-xl border border-gray-300 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-700">Tutor Registration</h2>

        {/* Name & Contact */}
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="firstName" placeholder="First Name *" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name *" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address *" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
          <input type="email" name="confirmEmail" placeholder="Confirm Email Address *" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
          <input type="text" name="phone" placeholder="Cell Number *" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
          <input type="text" name="cnic" placeholder="CNIC Number *" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
        </div>

        {/* Address */}
        <div className="mt-4">
          <input type="text" name="address" placeholder="Street Address *" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-4" onChange={handleChange} />
          <input type="text" name="city" placeholder="City *" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-4" onChange={handleChange} />
          <input type="text" name="state" placeholder="State *" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-4" onChange={handleChange} />
          <input type="text" name="zip" placeholder="Zip Code *" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-4" onChange={handleChange} />
        </div>

        {/* Profile & Credentials */}
        <div className="mt-4">
          <input type="file" name="profilePicture" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <textarea name="bio" placeholder="Your Bio" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-4" onChange={handleChange}></textarea>
        </div>

        {/* Username & Password */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <input type="text" name="username" placeholder="Username *" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password *" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password *" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
        </div>

        {/* Levels */}
        <div className="mt-4">
          <h3 className="font-bold">What levels do you tutor?</h3>
          {levelsList.map((level) => (
            <label key={level} className="block">
              <input type="checkbox" name="levels" value={level} onChange={handleChange} /> {level}
            </label>
          ))}
        </div>
        {/* education Levels */}
        <div className="mt-4">
          <h3 className="font-bold">What is the highest level of education that you have completed? *</h3>
          {educationLevels.map((level) => (
            <label key={level} className="block">
              <input type="radio" name="educationlevels" value={level} onChange={handleChange} /> {level}
            </label>
          ))}
        </div>

        {/* Subjects & Instruments */}
        <div className="mt-4">
          <h3 className="font-bold">Which subjects do you tutor?</h3>
          <div className="grid grid-cols-2 gap-2">
            {subjectsList.map((subject) => (
              <label key={subject}>
                <input type="checkbox" name="subjects" value={subject} onChange={handleChange} /> {subject}
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="mt-4">
          <h3 className="font-bold">What days and times are you available to tutor?</h3>
          <div className="grid grid-cols-2 gap-2">
            {availabilityList.map((time) => (
              <label key={time}>
                <input type="checkbox" name="availability" value={time} onChange={handleChange} /> {time}
              </label>
            ))}
          </div>
        </div>
        {/* Student Status */}
        <div className="mt-4">
          <h3 className="font-bold">Are you currently a student?</h3>
          <label><input type="radio" name="studentStatus" value="Yes" onChange={handleChange} /> Yes</label>
          <label><input type="radio" name="studentStatus" value="No" onChange={handleChange} className="ml-4" /> No</label>
        </div>

        {/* Consent */}
        <div className="mt-4">
          <label>
            <input type="checkbox" name="consent" onChange={handleChange} required /> By checking this box, you consent to a background check.
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-yellow-500 text-white p-3 mt-6 rounded-xl font-semibold hover:bg-yellow-600 transition duration-300 shadow-md">Register</button>
      </form>
    </div>
  );
}

export default TutorRegistration;