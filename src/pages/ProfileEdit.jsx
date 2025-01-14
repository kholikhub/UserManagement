import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProfileEdit() {
  const navigate = useNavigate();

  const [tempProfile, setTempProfile] = useState({
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
      setTempProfile(savedProfile);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempProfile({ ...tempProfile, [name]: value });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    localStorage.setItem("profileData", JSON.stringify(tempProfile));
    navigate("/");
  };

  const handleChangePhoto = (type) => (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setTempProfile({ ...tempProfile, [type]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header
        className="relative flex flex-col justify-end h-72 bg-blue-500 text-white"
        style={{ backgroundImage: `url(${tempProfile.coverPhoto})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <input
          type="file"
          accept="image/*"
          onChange={handleChangePhoto("coverPhoto")}
          className="hidden"
          id="changeCover"
        />
        <label
          htmlFor="changeCover"
          className="relative px-4 py-2 bg-blue-600 rounded cursor-pointer ml-auto m-4"
        >
          Change Cover
        </label>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="bg-white p-6 col-span-1 rounded shadow relative mt-6">
            <div className="flex flex-col items-center gap-4">
              <label htmlFor="changeProfilePhoto" className="relative">
                <img
                  src={tempProfile.profilePhoto || "https://via.placeholder.com/80"}
                  alt="Avatar"
                  className="w-54 h-54 rounded-full border-4 border-white shadow cursor-pointer"
                />
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleChangePhoto("profilePhoto")}
                className="hidden"
                id="changeProfilePhoto"
              />
              <div className="text-center">
                <h3 className="text-lg font-bold">{tempProfile.firstName} {tempProfile.lastName}</h3>
                <p className="text-sm text-gray-500">{tempProfile.company}</p>
                <p className="text-sm text-gray-500">{tempProfile.jobTitle}</p>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="col-span-2 bg-white p-6 rounded shadow mt-6">
            <h3 className="text-lg font-bold mb-4">Edit Profile</h3>
            <form onSubmit={handleUpdateProfile} className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full px-3 py-2 border rounded"
                  value={tempProfile.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full px-3 py-2 border rounded"
                  value={tempProfile.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded"
                  value={tempProfile.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="w-full px-3 py-2 border rounded"
                  value={tempProfile.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  className="w-full px-3 py-2 border rounded"
                  value={tempProfile.city}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">State/County</label>
                <input
                  type="text"
                  name="state"
                  className="w-full px-3 py-2 border rounded"
                  value={tempProfile.state}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Postcode</label>
                <input
                  type="text"
                  name="postcode"
                  className="w-full px-3 py-2 border rounded"
                  value={tempProfile.postcode}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Country</label>
                <input
                  type="text"
                  name="country"
                  className="w-full px-3 py-2 border rounded"
                  value={tempProfile.country}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  className="w-full px-3 py-2 border rounded"
                  value={tempProfile.jobTitle}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-3 py-2 border rounded"
                  value={tempProfile.company}
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="col-span-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfileEdit;
