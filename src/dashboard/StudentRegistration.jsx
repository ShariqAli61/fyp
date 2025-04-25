import { useState } from "react";
import StudentDashboard from "./student";

function StudentRegistration() {
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
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    setRegistered(true);
  };

  if (registered) {
    return <StudentDashboard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300 p-6 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-xl rounded-xl border border-gray-300 w-full max-w-2xl"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-700">Student Registration</h2>

        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="firstName" placeholder="First Name" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
        </div>

        <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-3" onChange={handleChange} />
        <input type="email" name="confirmEmail" placeholder="Confirm Email Address" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-3" onChange={handleChange} />
        
        <input type="text" name="phone" placeholder="Cell Number" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-3" onChange={handleChange} />
        
        <div className="grid grid-cols-2 gap-4 mt-3">
          <input type="text" name="address" placeholder="Street Address" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
          <input type="text" name="city" placeholder="City" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-3">
          <input type="text" name="state" placeholder="State" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
          <input type="text" name="zip" placeholder="Zip" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
        </div>

        <input type="text" name="username" placeholder="User Name" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-3" onChange={handleChange} />
        
        <div className="grid grid-cols-2 gap-4 mt-3">
          <input type="password" name="password" placeholder="Password" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" onChange={handleChange} />
        </div>

        <button type="submit" className="w-full bg-yellow-500 text-white p-3 mt-6 rounded-xl font-semibold hover:bg-yellow-600 transition duration-300 shadow-md">
          Register
        </button>
      </form>
    </div>
  );
}

export default StudentRegistration;
