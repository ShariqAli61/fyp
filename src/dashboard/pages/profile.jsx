// function Profile() {
//     return <div className="text-center mt-10">Update your profile details here.</div>;
//   }
  
//   export default Profile;
  


import { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaLock, FaCamera, FaSave } from 'react-icons/fa';
import axios from 'axios';
import { mockApi } from '../mockApi';
import { toast } from 'react-toastify';

const Profile = ({ userType }) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    qualifications: '',
    profilePicture: null,
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  // Load user data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get(`/api/${userType}/profile`);
        setProfile({
          ...response.data,
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        if (response.data.profilePicture) {
          setPreviewImage(response.data.profilePicture);
        }
      } catch (error) {
        toast.error('Failed to load profile');
      }
    };
    fetchProfile();
  }, [userType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, profilePicture: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', profile.name);
      formData.append('email', profile.email);
      formData.append('phone', profile.phone);
      if (profile.profilePicture) {
        formData.append('profilePicture', profile.profilePicture);
      }
      if (userType === 'teacher') {
        formData.append('qualifications', profile.qualifications);
      }

      await axios.put(`/api/${userType}/profile`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success('Profile updated successfully');
      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (profile.newPassword !== profile.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      await axios.put(`/api/${userType}/change-password`, {
        currentPassword: profile.currentPassword,
        newPassword: profile.newPassword
      });
      toast.success('Password changed successfully');
      setProfile({
        ...profile,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to change password');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile Settings</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Profile Picture */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="relative mb-4">
            <img
              src={previewImage || '/default-profile.png'}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-200"
            />
            {isEditing && (
              <label className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600">
                <FaCamera />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
          
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center"
            >
              <FaUser className="mr-2" /> Edit Profile
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center"
              >
                <FaSave className="mr-2" /> Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Right Column - Profile Info */}
        <div className="w-full md:w-2/3">
          {/* Personal Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Personal Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <FaUser className="text-gray-500 mr-3" />
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    placeholder="Full Name"
                  />
                ) : (
                  <p className="text-gray-700">{profile.name}</p>
                )}
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-gray-500 mr-3" />
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    placeholder="Email"
                  />
                ) : (
                  <p className="text-gray-700">{profile.email}</p>
                )}
              </div>

              <div className="flex items-center">
                <FaPhone className="text-gray-500 mr-3" />
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    placeholder="Phone Number"
                  />
                ) : (
                  <p className="text-gray-700">{profile.phone || 'Not provided'}</p>
                )}
              </div>

              {userType === 'teacher' && (
                <div className="flex items-center">
                  <FaGraduationCap className="text-gray-500 mr-3" />
                  {isEditing ? (
                    <textarea
                      name="qualifications"
                      value={profile.qualifications}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-lg"
                      placeholder="Qualifications"
                      rows="3"
                    />
                  ) : (
                    <p className="text-gray-700">
                      {profile.qualifications || 'No qualifications added'}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Change Password */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Change Password</h2>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div className="flex items-center">
                <FaLock className="text-gray-500 mr-3" />
                <input
                  type="password"
                  name="currentPassword"
                  value={profile.currentPassword}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Current Password"
                  required
                />
              </div>

              <div className="flex items-center">
                <FaLock className="text-gray-500 mr-3" />
                <input
                  type="password"
                  name="newPassword"
                  value={profile.newPassword}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="New Password"
                  required
                  minLength="6"
                />
              </div>

              <div className="flex items-center">
                <FaLock className="text-gray-500 mr-3" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={profile.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Confirm New Password"
                  required
                  minLength="6"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center"
              >
                <FaLock className="mr-2" /> Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;