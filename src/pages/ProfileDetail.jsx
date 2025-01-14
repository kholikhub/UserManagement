import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCity } from "react-icons/fa";

function ProfileDetail() {
  const [profile, setProfile] = useState({
    firstName: "Muhammad Nur",
    lastName: "Kholik",
    email: "kholik@gmail.com",
    phone: "+6285156000994",
    city: "kraksaan",
    state: "jawa timur",
    postcode: "67282",
    country: "indonesia",
    company: "PT. Kholik",
    jobTitle: "frontend development",
    profilePhoto: "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
    coverPhoto: "https://th.bing.com/th/id/OIP.Vuao2YZY4K7Suqo3cqMmjQHaEK?rs=1&pid=ImgDetMain",
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profileData"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header
        className="relative bg-blue-500 h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${profile.coverPhoto || "https://via.placeholder.com/1920x500"})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="col-span-1 flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
            <img
              src={profile.profilePhoto || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{profile.firstName} {profile.lastName}</h2>
            <p className="text-gray-500">{profile.jobTitle}</p>
            <p className="text-sm text-gray-400">{profile.company}</p>
            <button
              onClick={() => navigate("/edit")}
              className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit Profile
            </button>
          </div>

          {/* Middle Section: Profile Info */}
          <div className="col-span-2 bg-white p-6 rounded-xl shadow-lg space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col p-4 bg-blue-50 rounded-lg shadow-md hover:bg-blue-100 transition-all">
                <div className="flex items-center mb-2">
                  <FaEnvelope className="text-blue-500 mr-2" />
                  <label className="font-bold text-sm text-gray-600">Email</label>
                </div>
                <p className="text-sm text-gray-800">{profile.email}</p>
              </div>
              <div className="flex flex-col p-4 bg-blue-50 rounded-lg shadow-md hover:bg-blue-100 transition-all">
                <div className="flex items-center mb-2">
                  <FaPhoneAlt className="text-blue-500 mr-2" />
                  <label className="font-bold text-sm text-gray-600">Phone</label>
                </div>
                <p className="text-sm text-gray-800">{profile.phone}</p>
              </div>
              <div className="flex flex-col p-4 bg-blue-50 rounded-lg shadow-md hover:bg-blue-100 transition-all">
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-blue-500 mr-2" />
                  <label className="font-bold text-sm text-gray-600">City</label>
                </div>
                <p className="text-sm text-gray-800">{profile.city}</p>
              </div>
              <div className="flex flex-col p-4 bg-blue-50 rounded-lg shadow-md hover:bg-blue-100 transition-all">
                <div className="flex items-center mb-2">
                  <FaCity className="text-blue-500 mr-2" />
                  <label className="font-bold text-sm text-gray-600">State/County</label>
                </div>
                <p className="text-sm text-gray-800">{profile.state}</p>
              </div>
              <div className="flex flex-col p-4 bg-blue-50 rounded-lg shadow-md hover:bg-blue-100 transition-all">
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-blue-500 mr-2" />
                  <label className="font-bold text-sm text-gray-600">Postcode</label>
                </div>
                <p className="text-sm text-gray-800">{profile.postcode}</p>
              </div>
              <div className="flex flex-col p-4 bg-blue-50 rounded-lg shadow-md hover:bg-blue-100 transition-all">
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-blue-500 mr-2" />
                  <label className="font-bold text-sm text-gray-600">Country</label>
                </div>
                <p className="text-sm text-gray-800">{profile.country}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfileDetail;
